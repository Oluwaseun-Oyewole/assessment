import Naira from "@/assets/svg/naira.svg";

type PageTitle = {
  [key: string]: string;
};

export const PageTitle: PageTitle = {
  home: "Home",
  reports: "Report",
  chat: "Chat",
  budget: "Budget",
  profile: "Profile",
};

interface SummaryType {
  id: number;
  title: string;
  icon: string;
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

export const categoryValues = [
  { id: 1, label: "Food and Drink", value: "Food" },
  { id: 2, label: "Calls", value: "Calls" },
  { id: 3, label: "Transport", value: "Transport" },
  { id: 4, label: "Books", value: "Books" },
  { id: 5, label: "others", value: "others" },
];
