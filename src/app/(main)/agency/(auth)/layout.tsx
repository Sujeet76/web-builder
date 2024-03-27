import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex justify-center items-center min-h-dvh w-full'>
      {children}
    </main>
  );
};

export default AuthLayout;
