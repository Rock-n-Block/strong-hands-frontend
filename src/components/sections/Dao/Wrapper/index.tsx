import React from 'react';
import classNames from 'classnames';

import { useScrollToTop } from '@/hooks/useScrollToTop';

import './Wrapper.scss';

interface IWrapperProps {
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  className?: string;
}

const Wrapper: React.FC<IWrapperProps> = ({ className, children }) => {
  useScrollToTop();
  return (
    <main className="dao-wrapper">
      <div className="row">
        <div className={classNames(className, 'dao-wrapper__content box-gray')}>{children}</div>
      </div>
    </main>
  );
};

export default Wrapper;
