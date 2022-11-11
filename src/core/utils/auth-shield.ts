export const verifyPath = (routes: string[] | undefined, uri: string) => {
  return routes?.some(route => route === uri);
};

export const getAccessRoute = (accessRoute: string | undefined) => {
  if (typeof accessRoute !== 'undefined') return accessRoute;

  return '/';
};
