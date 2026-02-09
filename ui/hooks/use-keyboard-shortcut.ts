// ui/hooks/use-keyboard-shortcut.ts

import { useEffect } from 'react';

export const useKeyboardShortcut = (
  key: string,
  callback: () => void,
  options: { ctrl?: boolean; shift?: boolean; meta?: boolean } = {}
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { ctrl, shift, meta } = options;

      // キーの判定 (MacのCommandキーはmetaKey, WindowsのCtrlはctrlKey)
      const isCtrlPressed = ctrl ? (event.ctrlKey || event.metaKey) : true;
      const isShiftPressed = shift ? event.shiftKey : true;

      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        isCtrlPressed &&
        isShiftPressed
      ) {
        event.preventDefault(); // ブラウザ既定の挙動（履歴戻る等）を防止
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, options]);
};