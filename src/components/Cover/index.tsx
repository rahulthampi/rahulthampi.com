import styled, { css } from 'styled-components';
import { layout, flexbox } from 'styled-system';

import { nonForwardingProps } from '../../constants/styles';

type CoverProps = {
  as?: string;
  minHeight?: string | null;
  minWidth?: string | null;
  display?: string;
  justifyContent?: string;
};

const Cover = styled.div.withConfig({
  shouldForwardProp: (prop) => !nonForwardingProps.includes(prop),
})<CoverProps>(
  () => css`
    width: 100%;
    height: 100%;

    ${layout};
    ${flexbox};
  `,
);

Cover.defaultProps = {
  display: 'flex',
  justifyContent: 'center',
};

export default Cover;
