import type { FC, ReactNode } from 'react';

type AuthCookieWrapperProps = {
  children: ReactNode;
};
const UnAuthWrapper: FC<AuthCookieWrapperProps> = ({ children }) => {
  return children;
};

export default UnAuthWrapper;
