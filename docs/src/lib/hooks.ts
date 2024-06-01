import React from "react";

export const useDebounce = <T>(value: T, timeout = 500) => {
  const [buffer, setBuffer] = React.useState<T>();
  const timeoutHandler = React.useRef<NodeJS.Timeout | undefined>();

  React.useEffect(() => {
    timeoutHandler.current = setTimeout(() => {
      setBuffer(value);
    }, timeout);
    return () => clearTimeout(timeoutHandler.current);
  }, [value, timeout]);
  return buffer ?? "";
};
