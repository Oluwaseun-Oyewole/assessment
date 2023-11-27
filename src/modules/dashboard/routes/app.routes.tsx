import React, { ReactNode } from "react";
import { BsChat } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import Budget from "../../../assets/svg/budget.svg";
import Chat from "../../../assets/svg/chat.svg";
import Home from "../../../assets/svg/home.svg";
import Profile from "../../../assets/svg/profile.svg";
import Report from "../../../assets/svg/reports.svg";
import { Routes } from "../../../common/routes/routes";

export interface AppRoutesType {
  id: number;
  path: string;
  name: string;
  icon: ReactNode;
  iconSolid: React.ComponentType<React.SVGProps<SVGSVGElement>> | ReactNode;
}
const size = 20;

const appRoutes: AppRoutesType[] = [
  {
    id: 1,
    path: Routes.home,
    name: "Home",
    icon: Home,
    iconSolid: <IoHomeOutline size={size} />,
  },
  {
    id: 2,
    path: Routes.reports,
    name: "Reports",
    icon: Report,
    iconSolid: <VscReport size={size} />,
  },
  {
    id: 3,
    path: Routes.chat,
    name: "Chat",
    icon: Chat,
    iconSolid: <BsChat size={size} />,
  },
  {
    id: 4,
    path: Routes.budget,
    name: "Budget",
    icon: Budget,
    iconSolid: <MdOutlineAccountBalanceWallet size={size} />,
  },
  {
    id: 5,
    path: Routes.profile,
    name: "Profile",
    icon: Profile,
    iconSolid: <CiUser size={size} />,
  },
];

export default appRoutes;
