import React, { createContext, useContext } from "react";
import { IStores, createStore } from "./createStore";

declare global {
  interface Window {
    amit: any;
  }
}

export const store = createStore();

let StoreContext = createContext(store);

type Props = {
  children: React.ReactNode;
};
export const StoreProvider = ({ children }: Props) => {
  StoreContext = createContext(store);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): IStores => {
  const storeInstance = useContext(StoreContext);

  window.amit = storeInstance;

  if (!storeInstance) {
    throw new Error("You have forgotten to use StoreProvider");
  }
  return storeInstance as IStores;
};
