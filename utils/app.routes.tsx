import Budget from "@/assets/svg/budget.svg";
import Chat from "@/assets/svg/chat.svg";
import Home from "@/assets/svg/home.svg";
import Profile from "@/assets/svg/profile.svg";
import Report from "@/assets/svg/reports.svg";
import React, { ReactNode } from "react";
import { BsChat } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import { Routes } from "./routes";

export interface AppRoutesType {
  id: number;
  path: string;
  name: string;
  icon: string;
  iconSolid: React.ComponentType<React.SVGProps<SVGSVGElement>> | ReactNode;
}
const size = 20;

const appRoutes: AppRoutesType[] = [
  {
    id: 1,
    path: Routes.home,
    name: "Home",
    icon: Home,
    iconSolid: <IoHomeOutline size={size} className="hidden lg:block" />,
  },
  {
    id: 2,
    path: Routes.reports,
    name: "Reports",
    icon: Report,
    iconSolid: <VscReport size={size} className="hidden lg:block" />,
  },
  {
    id: 3,
    path: Routes.chat,
    name: "Chat",
    icon: Chat,
    iconSolid: <BsChat size={size} className="hidden lg:block" />,
  },
  {
    id: 4,
    path: Routes.budget,
    name: "Budget",
    icon: Budget,
    iconSolid: (
      <MdOutlineAccountBalanceWallet size={size} className="hidden lg:block" />
    ),
  },
  {
    id: 5,
    path: Routes.profile,
    name: "Profile",
    icon: Profile,
    iconSolid: <CiUser size={size} className="hidden lg:block" />,
  },
];

export default appRoutes;
