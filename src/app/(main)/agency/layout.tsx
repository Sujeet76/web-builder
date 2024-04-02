import Sidebar from "@/components/sidebar";
import UnAuthorizedComponent from "@/components/unauthorized";
import {
  getANotificationAndUser,
  verifyAndAcceptInvitation,
} from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: { agencyId: string };
}

const Layout: React.FC<Props> = async ({ children, params }) => {
  const agencyId = await verifyAndAcceptInvitation();
  const user = await currentUser();

  if (!user) return redirect("/");

  if (!agencyId) return redirect("/agency");

  if (
    user.privateMetadata.role !== "AGENCY_OWNER" &&
    user.privateMetadata.role !== "AGENCY_ADMIN"
  ) {
    return <UnAuthorizedComponent />;
  }

  let allNotification = await getANotificationAndUser(agencyId);

  return (
    <div className='h-dvh overflow-hidden'>
      <Sidebar
        id={params.agencyId}
        type='agency'
      />
      <div className='md:pl-80'>{children}</div>
    </div>
  );
};

export default Layout;
