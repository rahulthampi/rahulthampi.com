import styled, { css } from 'styled-components';
import { space, color, layout, flexbox, grid } from 'styled-system';

import { nonForwardingProps } from '../../constants/styles';

type BoxProps = {
  as?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  gridGap?: number | string;
  px?: number | string;
  py?: number | string;
  mt?: number | string;
  width?: number | string;
};

const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => !nonForwardingProps.includes(prop),
})<BoxProps>(
  () => css`
    box-sizing: border-box;
    min-width: 0;

    ${space};
    ${color};
    ${layout};
    ${flexbox};
    ${grid};
  `,
);

export default Box;
