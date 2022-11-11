'use client';

import { getAccessRoute, verifyPath } from '@utils/auth-shield';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { ReactNode, useEffect } from 'react';

const AuthShield = ({
  isAuth,
  isLoading,
  router: { replace },
  pathname,
  loginRoute,
  accessRoute,
  privateRoutes,
  publicRoutes,
  children
}: TAuthShield) => {
  const pathIsPrivate = verifyPath(privateRoutes, pathname);
  const pathIsPublic = verifyPath(publicRoutes, pathname);
  const access = getAccessRoute(accessRoute);

  useEffect(() => {
    if (!isAuth && !isLoading && pathIsPrivate) replace(loginRoute);
    if (isAuth && !isLoading && pathIsPublic) replace(access);
    if (isAuth && !isLoading) replace(access);
  }, [
    replace,
    access,
    isAuth,
    isLoading,
    loginRoute,
    pathIsPrivate,
    pathIsPublic
  ]);

  if (
    ((isLoading || !isAuth) && pathIsPrivate) ||
    ((isLoading || isAuth) && pathIsPublic) ||
    isLoading
  )
    return <>Loading...</>;

  return <>{children}</>;
};

type TAuthShield = {
  isAuth: boolean;
  isLoading: boolean;
  router: AppRouterInstance;
  pathname: string;
  loginRoute: string;
  accessRoute: string;
  privateRoutes: string[];
  publicRoutes: string[];
  children: ReactNode;
};

export default AuthShield;
