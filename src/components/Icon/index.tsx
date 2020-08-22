import React, { ElementType } from 'react';

import icons from './icons.svg';

export enum IconNames {
  'logo-dark-bg' = 'logo-dark-bg',
  'logo-dark-no-bg' = 'logo-dark-no-bg',
  'compass-needle' = 'compass-needle',
}

type IconProps = {
  name: IconNames;
  width: string;
  height: string;
};

const Icon: ElementType = ({ name, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <use className="icon" xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};

export default Icon;
