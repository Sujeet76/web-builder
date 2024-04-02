import { Agency } from "@prisma/client";
import React from "react";

interface Props {
  agencyDetails: Agency;
  userId: string;
  username: string;
}

const SubaccountDetails: React.FC<Props> = ({
  agencyDetails,
  userId,
  username,
}) => {
  return <div>Hello</div>;
};

export default SubaccountDetails;
