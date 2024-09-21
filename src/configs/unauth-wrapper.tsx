import { ACCESS_TOKEN_COOKIE } from '@/constants/keys';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { FC, ReactNode } from 'react';

type AuthCookieWrapperProps = {
  children: ReactNode;
};
const UnAuthWrapper: FC<AuthCookieWrapperProps> = ({ children }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE);

  if (accessToken) {
    redirect('/');
  }
  return children;
};

export default UnAuthWrapper;
