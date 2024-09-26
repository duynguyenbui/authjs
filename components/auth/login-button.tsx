'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface LoginButtonProps {
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export const LoginButton = ({
  mode = 'redirect',
  asChild,
  children,
}: PropsWithChildren & LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
