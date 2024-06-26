"use client";
import { Toastify } from "@/utils/toast";
import React, { useContext, useEffect, useState } from "react";
import { CategoryType, ContextCreatorType } from "./types";

export const ContextCreator = React.createContext<ContextCreatorType | null>(
  null,
);

export const ContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [amount, setAmount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState<CategoryType[]>(categories);

  const total =
    categoryData &&
    categoryData?.reduce((total, item) => total + parseInt(item.amount), 0);

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      const value = JSON.parse(localStorage.getItem("amount")!);
      const categories = JSON.parse(localStorage.getItem("categories")!);
      const amount = value?.amount;
      setAmount(amount);
      setCategories(categories);
    }
  }, []);

  const updateAmount = (amount: number) => {
    setAmount(amount);
  };
  const createCategory = (category: CategoryType) => {
    let catArray = [];
    const categories = localStorage.getItem("categories");
    if (categories) {
      catArray = JSON.parse(categories);
    }
    if (amount > total) {
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
      catArray.push(category);
      localStorage.setItem("categories", JSON.stringify(catArray));
    } else {
      Toastify.error("total exceeds budgeted amount");
    }
  };

  const removeCategory = (id: number | string) => {
    const newArray = categoryData?.filter((cat) => {
      return String(cat.id) !== String(id);
    });
    setCategoryData(newArray);
    localStorage.setItem("categories", JSON.stringify(newArray));
  };

  return (
    <ContextCreator.Provider
      value={{
        amount,
        updateAmount,
        categories: categoryData,
        createCategory,
        removeCategory,
        total,
        setCategoryData,
      }}
    >
      {children}
    </ContextCreator.Provider>
  );
};

export const useBudgetData = () => {
  const context = useContext(ContextCreator);
  if (!context) {
    throw new Error(" context data must be used within a context provider");
  }
  return context;
};
