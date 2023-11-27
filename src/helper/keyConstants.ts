import { ReactNode } from "react";
import Food from "../assets/svg/food.svg";
import Naira from "../assets/svg/naira.svg";
import Savings from "../assets/svg/savings.svg";

interface SummaryType {
  id: number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | ReactNode;
  amount: string;
}

export const budgetCard: SummaryType[] = [
  {
    id: 1,
    title: "Monthly Budget",
    icon: Naira,
    amount: "120,000",
  },
];

interface CategoryType {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | ReactNode;
  title: string;
  percentage: string;
  amount: string;
  total: string;
}

export const Category: CategoryType[] = [
  {
    id: 1,
    icon: Food,
    title: "Food and Drink",
    percentage: "40%",
    amount: "20,000",
    total: "42,000",
  },

  {
    id: 2,
    icon: Savings,
    title: "Savings",
    percentage: "20%",
    amount: "10,000",
    total: "24,000",
  },
];
