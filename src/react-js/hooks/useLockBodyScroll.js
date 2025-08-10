import { useEffect } from 'react';

export default function useLockBodyScroll(locked, { reserveScrollBarGap = true } = {}) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const { body } = document;
    const docEl = document.documentElement;

    const getScrollBarGap = () => window.innerWidth - docEl.clientWidth;

    const datasetKey = 'psScrollLocks';
    const current = parseInt(body.dataset[datasetKey] || '0', 10);

    if (locked) {
      // If this is the first lock, store original styles and apply lock
      if (current === 0) {
        body.dataset.psOrigOverflow = body.style.overflow || '';
        body.dataset.psOrigPaddingRight = body.style.paddingRight || '';
        body.dataset.psOrigTouchAction = body.style.touchAction || '';

        if (reserveScrollBarGap) {
          const gap = getScrollBarGap();
          if (gap > 0) {
            const currentPadding = parseFloat(getComputedStyle(body).paddingRight) || 0;
            body.style.paddingRight = `${currentPadding + gap}px`;
          }
        }

        body.style.overflow = 'hidden';
        // Prevent iOS overscroll
        body.style.touchAction = 'none';
      }
      body.dataset[datasetKey] = String(current + 1);
    } else {
      // Unlock only when all locks are released
      // eslint-disable-next-line no-lonely-if
      if (current > 0) {
        const next = current - 1;
        body.dataset[datasetKey] = String(next);
        if (next === 0) {
          body.style.overflow = body.dataset.psOrigOverflow || '';
          body.style.paddingRight = body.dataset.psOrigPaddingRight || '';
          body.style.touchAction = body.dataset.psOrigTouchAction || '';

          delete body.dataset.psOrigOverflow;
          delete body.dataset.psOrigPaddingRight;
          delete body.dataset.psOrigTouchAction;
          delete body.dataset[datasetKey];
        }
      }
    }

    return () => {
      // Ensure we fully unlock on unmount if still locked
      if (locked) {
        const curr = parseInt(body.dataset[datasetKey] || '0', 10);
        if (curr > 0) {
          const next = curr - 1;
          body.dataset[datasetKey] = String(next);
          if (next === 0) {
            body.style.overflow = body.dataset.psOrigOverflow || '';
            body.style.paddingRight = body.dataset.psOrigPaddingRight || '';
            body.style.touchAction = body.dataset.psOrigTouchAction || '';

            delete body.dataset.psOrigOverflow;
            delete body.dataset.psOrigPaddingRight;
            delete body.dataset.psOrigTouchAction;
            delete body.dataset[datasetKey];
          }
        }
      }
    };
  }, [locked, reserveScrollBarGap]);
}

export function useSimpleLockBodyScroll(locked) {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const { body } = document;
    const prev = body.style.overflow;
    if (locked) body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = prev;
    };
  }, [locked]);
}
