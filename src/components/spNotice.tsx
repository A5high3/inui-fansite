import React from 'react';

export default function SpNotice(): JSX.Element {
  return (
    <div style={{ marginRight: 25, marginLeft: 25, marginBottom: 50 }}>
      <div
        style={{
          width: 'auto',
          textAlign: 'center',
          fontSize: 20,
        }}
      >
        ※ ※ ※ N O T I C E ※ ※ ※
      </div>
      <br />
      当サイトはパソコンのみの対応となっております。 スマートフォンは対応しておりません。
      <br />
      <br />
      お手数をおかけしますが、パソコンからのアクセスをお願いいたします。
      <br />
    </div>
  );
}
