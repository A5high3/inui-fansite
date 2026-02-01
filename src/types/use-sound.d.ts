declare module 'use-sound' {
  import { Howl } from 'howler';

  type PlayFunction = (options?: PlayOptions) => void;

  interface PlayOptions {
    id?: string;
    forceSoundEnabled?: boolean;
    playbackRate?: number;
  }

  interface HookOptions {
    volume?: number;
    playbackRate?: number;
    interrupt?: boolean;
    soundEnabled?: boolean;
    sprite?: { [key: string]: [number, number] };
    onload?: () => void;
    onplay?: () => void;
    onend?: () => void;
    onpause?: () => void;
    onstop?: () => void;
  }

  interface ExposedData {
    sound: Howl | null;
    stop: (id?: string) => void;
    pause: (id?: string) => void;
    duration: number | null;
  }

  export default function useSound(
    src: string | string[],
    options?: HookOptions
  ): [PlayFunction, ExposedData];
}
