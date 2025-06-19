import { useMemo } from 'react';
import { getPrefix } from '../../utils/getPrefix';

// eslint-disable-next-line import/prefer-default-export
export function usePrestylerPrefix() {
  return useMemo(() => getPrefix(), []);
}
