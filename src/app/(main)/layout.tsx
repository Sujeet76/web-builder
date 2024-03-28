import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {props.children}
    </ClerkProvider>
  );
};

export default Layout;
