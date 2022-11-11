import { ReactNode } from 'react';
import AuthWrapper from './AuthWrapper';

import ReactQueryWrapper from './ReactQueryWrapper';
import ReduxWrapper from './ReduxWrapper';

const ProvidersWrapper = ({ children }: TProvidersWrapper) => {
  return (
    <ReduxWrapper>
      <ReactQueryWrapper>
        <AuthWrapper>{children}</AuthWrapper>
      </ReactQueryWrapper>
    </ReduxWrapper>
  );
};

type TProvidersWrapper = {
  children: ReactNode;
};

export default ProvidersWrapper;
