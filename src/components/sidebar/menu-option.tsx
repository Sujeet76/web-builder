import { useState } from "react";
import {
  AgencySidebarOption,
  SubAccount,
  SubAccountSidebarOption,
} from "@prisma/client";

type ExtendedSubAccounts = SubAccount & {
  SidebarOption: SubAccountSidebarOption[];
};

interface Props {
  defaultOpen?: boolean;
  subAccounts: ExtendedSubAccounts[] | undefined;
  sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[];
  sidebarLogo: string;
  details: any;
  user: any;
  id: string;
}

const MenuOptions: React.FC<Props> = ({
  details,
  defaultOpen,
  subAccounts,
  sidebarLogo,
  sidebarOpt,
  id,
  user,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  return <div></div>;
};

export default MenuOptions;
