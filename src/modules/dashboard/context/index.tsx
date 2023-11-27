import React, { useState } from "react";
import { ContextCreatorType } from "./type";

export const ContextCreator = React.createContext<ContextCreatorType | null>(
  null
);

export const ContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [amount, setAmount] = useState(0);

  const updateAmount = (amount: number) => {
    setAmount(amount);
  };

  return (
    <ContextCreator.Provider value={{ amount, updateAmount }}>
      {children}
    </ContextCreator.Provider>
  );
};
