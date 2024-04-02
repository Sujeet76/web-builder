import { getAuthUserDetails } from "@/lib/queries";
import MenuOptions from "./menu-option";

interface Props {
  id: string;
  type: "agency" | "subaccount";
}

const Sidebar: React.FC<Props> = async ({ id, type }) => {
  const user = await getAuthUserDetails();
  if (!user) return null;

  const details =
    type === "agency"
      ? user?.Agency
      : user?.Agency?.SubAccount.find((subaccount) => subaccount.id === id);

  const isWhiteLabeledAgency = user.Agency?.whiteLabel;
  if (!details) return;

  let sideBarLogo = user?.Agency?.agencyLogo || "/assets/plura-logo.svg";

  if (!isWhiteLabeledAgency) {
    if (type === "subaccount") {
      sideBarLogo =
        user?.Agency?.SubAccount.find((subaccount) => subaccount.id === id)
          ?.subAccountLogo ||
        user.Agency?.agencyLogo ||
        "/assets/plura-logo.svg";
    }
  }

  const sidebarOptions =
    type === "agency"
      ? user.Agency?.SidebarOption || []
      : user.Agency?.SubAccount.find((subaccount) => subaccount.id === id)
          ?.SidebarOption || [];

  const subaccounts = user.Agency?.SubAccount.filter((subaccount) =>
    user.Permissions.find(
      (permission) =>
        permission.subAccountId === subaccount.id && permission.access
    )
  );

  return (
    <>
      <MenuOptions
        details={details}
        defaultOpen={true}
        subAccounts={subaccounts}
        sidebarOpt={sidebarOptions}
        sidebarLogo={sideBarLogo}
        user={user}
        id={id}
      />
      <MenuOptions
        details={details}
        subAccounts={subaccounts}
        sidebarOpt={sidebarOptions}
        sidebarLogo={sideBarLogo}
        user={user}
        id={id}
      />
      sidebar
    </>
  );
};

export default Sidebar;
