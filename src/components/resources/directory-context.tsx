"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type DirectoryContextValue = {
  /** Active category filters (empty = show all). Multiple = union (OR). */
  activeCategories: string[];
  setActiveCategories: (keys: string[]) => void;
  toggleCategory: (key: string) => void;
  clearCategories: () => void;
  search: string;
  setSearch: (value: string) => void;
  /** Bumped whenever the needs-finder asks the directory to scroll into view. */
  scrollSignal: number;
  requestScrollToDirectory: () => void;
};

const DirectoryContext = createContext<DirectoryContextValue | null>(null);

export function DirectoryProvider({ children }: { children: ReactNode }) {
  const [activeCategories, setActiveCategoriesState] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [scrollSignal, setScrollSignal] = useState(0);

  const setActiveCategories = useCallback((keys: string[]) => {
    setActiveCategoriesState(keys);
  }, []);

  const toggleCategory = useCallback((key: string) => {
    setActiveCategoriesState((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  }, []);

  const clearCategories = useCallback(() => {
    setActiveCategoriesState([]);
  }, []);

  const requestScrollToDirectory = useCallback(() => {
    setScrollSignal((n) => n + 1);
  }, []);

  const value = useMemo<DirectoryContextValue>(
    () => ({
      activeCategories,
      setActiveCategories,
      toggleCategory,
      clearCategories,
      search,
      setSearch,
      scrollSignal,
      requestScrollToDirectory,
    }),
    [activeCategories, setActiveCategories, toggleCategory, clearCategories, search, scrollSignal, requestScrollToDirectory],
  );

  return <DirectoryContext.Provider value={value}>{children}</DirectoryContext.Provider>;
}

export function useDirectory(): DirectoryContextValue {
  const ctx = useContext(DirectoryContext);
  if (!ctx) {
    throw new Error("useDirectory must be used within a DirectoryProvider");
  }
  return ctx;
}
