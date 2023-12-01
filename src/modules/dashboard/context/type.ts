import React, { ReactNode } from "react";

export type CategoryType = {
  id: number | string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | ReactNode;
  title: string;
  percentage: string | number;
  amount: string;
  total: number;
};

export type ContextCreatorType = {
  categories: CategoryType[];
  createCategory: (category: CategoryType) => void;
  removeCategory: (id: number | string) => void;
  amount: number;
  total: number;
  updateAmount: (amount: number) => void;
  setCategoryData: React.Dispatch<React.SetStateAction<CategoryType[]>>;
};
