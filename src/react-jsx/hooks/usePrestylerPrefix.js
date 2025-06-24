import { useMemo } from 'react';
import { getPrefix } from '../../utils/getPrefix';
import { getFullClassName } from '../utilities/utilities';

// eslint-disable-next-line import/prefer-default-export
export function usePrestylerPrefix() {
  return useMemo(() => getPrefix(), []);
}

export function usePrestylerClassBuilder(
  defaultBsClasses,
  { className = '', useBsClasses = true, ...rest }
) {
  const prefix = usePrestylerPrefix();
  const prestylerFullClassName = getFullClassName(
    defaultBsClasses,
    prefix,
    useBsClasses,
    className
  );
  return { ...rest, prestylerFullClassName };
}
