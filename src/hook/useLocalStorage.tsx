import { useEffect, useState } from "react";

export default function useLocalStorageNumber(
  key: string,
  initialValue: number
): [score: number, setScore: React.Dispatch<React.SetStateAction<number>>] {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const valueStr = window.localStorage.getItem(key);
    if (valueStr) {
      setValue(Number(valueStr));
    }
  }, [key]);

  useEffect(() => {
    const prev = window.localStorage.getItem(key) ?? "0";
    const next = String(value);

    if (parseInt(prev) < value) {
      window.localStorage.setItem(key, next);
    }
  }, [key, value]);

  return [value, setValue];
}
