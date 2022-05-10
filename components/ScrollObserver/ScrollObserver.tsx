import {
  useCallback,
  useState,
  useEffect,
  createContext,
  FC,
  ReactElement,
} from "react";

interface ScrollValue {
  scrollY: number;
}

interface Props {
  children: ReactElement;
}

export const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
});

export const ScrollObserver: FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

