import React from 'react';
import classNames from 'classnames';

import './Information.scss';

interface IInformationProps {
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  className?: string;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  title?: string | React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  customClasses?: {
    title?: string;
    content?: string;
  };
}

const Information: React.FC<IInformationProps> = ({
  className,
  title,
  children,
  customClasses = {},
}) => {
  return (
    <section className={classNames('information', className)}>
      <div
        className={classNames(
          'information__title',
          'text-black text-bold text-smd',
          customClasses.title,
        )}
      >
        {title}
      </div>
      <div className={classNames('information__content', customClasses.content)}>{children}</div>
    </section>
  );
};

export default Information;
