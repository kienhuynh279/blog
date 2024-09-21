import UnAuthWrapper from '@/configs/unauth-wrapper';
import type { ReactNode } from 'react';

type UnAuthLayoutProps = {
  children: ReactNode;
};
const UnAuthLayout = ({ children }: UnAuthLayoutProps) => {
  return (
    <UnAuthWrapper>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="w-full max-w-[420px]">{children}</div>
      </div>
    </UnAuthWrapper>
  );
};

export default UnAuthLayout;
