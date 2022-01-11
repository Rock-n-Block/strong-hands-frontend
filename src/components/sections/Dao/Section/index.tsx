import React from 'react';
import classNames from 'classnames';

import './Section.scss';

interface ISectionProps {
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  className?: string;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  title?: string | React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  customClasses?: {
    root?: string;
    wrapper?: string;
    header?: string;
    body?: string;
  };
}

const Section: React.FC<ISectionProps> = ({ className, title, children, customClasses = {} }) => {
  return (
    <section
      className={classNames('section', 'box-shadow box-white', className, customClasses.root)}
    >
      <div className={classNames('section__wrapper', customClasses.wrapper)}>
        {title && (
          <div
            className={classNames(
              'section__header',
              'text-black text-slg text-bold',
              customClasses.header,
            )}
          >
            {title}
          </div>
        )}
        <div className={classNames('section__body', customClasses.body)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
