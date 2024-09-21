import UnAuthWrapper from '@/configs/unauth-wrapper';
import type { ReactNode } from 'react';

type UnAuthLayoutProps = {
  children: ReactNode;
};
const UnAuthLayout = ({ children }: UnAuthLayoutProps) => {
  return (
    <UnAuthWrapper>
      <div>{children}</div>
    </UnAuthWrapper>
  );
};

export default UnAuthLayout;
