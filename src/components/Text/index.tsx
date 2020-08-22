import styled, { css } from 'styled-components';
import { space, color, layout, typography } from 'styled-system';

import { nonForwardingProps } from '../../constants/styles';

type TextProps = {
  as?: string;
  textAlign?: string;
  fontSize?: string | number | string[] | number[];
  customFontSize?: string | number;
  minFontSize?: string | number;
  maxFontSize?: string | number;
};

const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => !nonForwardingProps.includes(prop),
})<TextProps>(
  (props) => css`
    ${props.minFontSize &&
    props.maxFontSize &&
    props.customFontSize &&
    css`
      font-size: clamp(
        ${props.minFontSize},
        ${props.customFontSize},
        ${props.maxFontSize}
      );
    `}

    font-family: 'Roboto', sans-serif;

    ${space};
    ${color};
    ${layout};
    ${typography};
  `,
);

export default Text;
