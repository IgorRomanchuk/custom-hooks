import { useEffect, useState } from "react";

interface IProps {
  id: number;
  price: number;
  title: string;
}

const useLocalStorage = (key: string): { items: IProps[]; setItems: (e: IProps[]) => void } => {
  const getCars = JSON.parse(localStorage.getItem(key) || "[]") || [];

  const [items, setItems] = useState<IProps[]>(getCars);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem(key, JSON.stringify(items));
    }
  }, [items]);

  return { items, setItems };
};

export default useLocalStorage;
