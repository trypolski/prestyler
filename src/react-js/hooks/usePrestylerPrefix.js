import { useMemo } from "react";
import { getPrefix } from "../../utils/getPrefix";

export function usePrestylerPrefix() {
  return useMemo(() => getPrefix(), []);
}
