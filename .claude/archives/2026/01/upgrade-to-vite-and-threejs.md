# inui-fansite アップグレード作業記録

**作業日**: 2026-02-01

## 概要

戌亥とこ非公式ファンサイトのフルアップグレードを実施。Create React App からViteへの移行、依存関係の最新化、Three.js統合の準備を完了。

---

## 1. 依存ライブラリのフルアップグレード

### Before（2020年頃のバージョン）

| パッケージ | バージョン |
|-----------|-----------|
| react | 16.13.1 |
| react-dom | 16.13.1 |
| react-scripts | 3.4.1 |
| typescript | 3.7.2 |
| @types/react | 16.9.0 |

### After

| パッケージ | バージョン |
|-----------|-----------|
| react | 18.2.0 |
| react-dom | 18.2.0 |
| typescript | 5.3.3 |
| @types/react | 18.2.61 |

### 変更内容

- `src/index.tsx`: `ReactDOM.render` → `createRoot` API に変更
- `tsconfig.json`: `jsx: "react"` → `jsx: "react-jsx"` に変更
- `.eslintrc`: 非推奨の `prettier/@typescript-eslint`, `prettier/react` を削除
- `src/setupTests.ts`: `@testing-library/jest-dom/extend-expect` → `@testing-library/jest-dom`

---

## 2. Viteへの移行

### 削除したもの

- `react-scripts` と関連依存
- `public/index.html`（ルートに移動）
- `browserslist` 設定
- `src/react-app-env.d.ts`

### 追加したもの

- `vite` v7.3.1
- `@vitejs/plugin-react` v5.1.2
- `index.html`（ルートディレクトリ）
- `vite.config.ts`
- `tsconfig.node.json`
- `src/vite-env.d.ts`

### 新しいスクリプト

```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "test": "vitest",
  "test:run": "vitest run"
}
```

---

## 3. Vitestへの移行

### 削除したもの

- Jest関連（`@types/jest`）

### 追加したもの

- `vitest` v4.0.18
- `jsdom` v27.4.0

### 設定

`vite.config.ts` にVitest設定を追加：

```typescript
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/setupTests.ts',
}
```

---

## 4. コードのモダナイズ

### 不要な `import React` の削除

React 18 + `jsx: "react-jsx"` では明示的な React インポートが不要。以下のファイルから削除：

- `src/App.tsx`
- `src/index.tsx`
- `src/components/bonus.tsx`
- `src/components/caution.tsx`
- `src/components/embeddedTwitter.tsx`
- `src/components/embeddedYoutubeGame.tsx`
- `src/components/embeddedYoutubeMusic.tsx`
- `src/components/embeddedYoutubeTalk.tsx`
- `src/components/embeddedYoutubeYozuri.tsx`
- `src/components/profile.tsx`
- `src/components/sectionHeaderLine.tsx`
- `src/components/spCaution.tsx`
- `src/components/spNotice.tsx`

### 型定義の追加

`use-sound` パッケージの型定義がなかったため、カスタム型定義を作成：

- `src/types/use-sound.d.ts`

---

## 5. Three.js統合の準備

### インストールしたパッケージ

| パッケージ | バージョン | 用途 |
|-----------|-----------|------|
| three | latest | Three.js本体 |
| @react-three/fiber | ^8.18.0 | React用Three.jsラッパー（React 18対応） |
| @react-three/drei | ^9 | Three.js用ヘルパー |
| @types/three | latest | 型定義 |

### 作成したファイル

- `src/three/ThreeScene.tsx`: Three.js動作確認用コンポーネント
  - 回転するボックス
  - グリッド表示
  - OrbitControls（マウス操作）

### App.tsxの変更

- `showThree` 状態を追加
- ファンサイトとThree.jsシーンの切り替え機能
- 「Three.js テスト」ボタンを右下に配置

---

## 6. パッケージ数の変化

- **Before**: 1578 packages（CRA）
- **After**: 629 packages（Vite + Three.js）
- **削減率**: 約60%

---

## 次のステップ

1. MMDモデルファイル（`.pmx`）を `public/` に配置
2. VMDアニメーションファイル（`.vmd`）を `public/` に配置
3. MMDLoaderを使ったモデル読み込み機能の実装
4. MMDAnimationHelperでアニメーション再生

---

## 参考: threeJsForNowブランチ

過去に開発途中だったThree.js統合ブランチ。以下の内容が含まれていた：

- `@react-three/fiber` v7.0.1（古いバージョン）
- MMDLoader による `/inuitoko.pmx` の読み込み
- VMDアニメーション `/sweetmagic-right.vmd` の読み込み試行
- MMDAnimationHelper の設定（未完成）

**注意**: MMDモデルファイルはコミットされていなかった（コミット漏れ）。

---

## ファイル構成（移行後）

```
inui-fansite/
├── index.html              # Vite用エントリーポイント
├── vite.config.ts          # Vite設定
├── tsconfig.json           # TypeScript設定
├── tsconfig.node.json      # Vite用TypeScript設定
├── package.json            # 依存関係
├── public/                 # 静的ファイル
│   ├── banken.png
│   ├── bankencursol.png
│   ├── bankenfocus.png
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── index.tsx           # エントリーポイント
    ├── App.tsx             # メインコンポーネント
    ├── App.css
    ├── index.css
    ├── vite-env.d.ts       # Vite型定義
    ├── setupTests.ts       # テスト設定
    ├── App.test.tsx        # テスト
    ├── assets/             # 画像・音声
    ├── components/         # UIコンポーネント
    ├── three/              # Three.js関連
    │   └── ThreeScene.tsx
    └── types/              # カスタム型定義
        └── use-sound.d.ts
```
