'use client';
import { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';

import { IS_AUTHENTICATED } from '@constants/react-query-cache-keys';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@constants/route';
import { authService } from '@services';
import { AuthShield } from '@guards';

const AuthWrapper = ({ children }: TAuthWrapper) => {
  const { data: isAuth = false, isLoading } = useQuery([IS_AUTHENTICATED], () =>
    authService.isAuthenticated()
  );

  const router = useRouter();
  const pathname = usePathname();

  return (
    <AuthShield
      isAuth={isAuth}
      isLoading={isLoading}
      router={router}
      pathname={pathname || ''}
      privateRoutes={PRIVATE_ROUTES}
      publicRoutes={PUBLIC_ROUTES}
      loginRoute="/login"
      accessRoute="/"
    >
      {children}
    </AuthShield>
  );
};

type TAuthWrapper = {
  children: ReactNode;
};

export default AuthWrapper;
