import React, { useState } from "react";
import { CategoryType, ContextCreatorType } from "./type";

export const ContextCreator = React.createContext<ContextCreatorType | null>(
  null
);

export const ContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [amount, setAmount] = useState(0);
  const [categoryData, setCategoryData] = useState<CategoryType[]>([]);

  const updateAmount = (amount: number) => {
    setAmount(amount);
  };

  const createCategory = (category: CategoryType) => {
    setCategoryData([
      ...categoryData,
      {
        id: category.id,
        icon: category.icon,
        title: category.title,
        percentage: category.percentage,
        amount: category.amount,
        total: category.total,
      },
    ]);
  };

  const removeCategory = (id: number | string) => {
    const newArray = categoryData.filter((cat) => {
      return String(cat.id) !== String(id);
    });
    setCategoryData(newArray);
  };

  const total = categoryData.reduce(
    (total, item) => total + parseInt(item.amount),
    0
  );

  return (
    <ContextCreator.Provider
      value={{
        amount,
        updateAmount,
        categories: categoryData,
        createCategory,
        removeCategory,
        total,
      }}
    >
      {children}
    </ContextCreator.Provider>
  );
};
