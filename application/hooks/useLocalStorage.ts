import { useEffect, useState } from "react";

export const getInitValue = (key: string, initValue: unknown) => {
  if (typeof window === "undefined") {
    return initValue;
  }

  try {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return JSON.parse(localValue);
    }
  } catch (error) {
    console.log("Failed to access local storage", error);
  }

  return initValue instanceof Function ? initValue() : initValue;
};

export const useLocalStorage = (key: string, initValue: unknown) => {
  const [state, setState] = useState(() => getInitValue(key, initValue));

  try {
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
  } catch (error) {
    console.log("Failed to access local storage", error);
  }

  return [state, setState] as const;
};

export default useLocalStorage;
