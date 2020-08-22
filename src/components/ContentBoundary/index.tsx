import styled, { css } from 'styled-components';
import { layout, flexbox, space } from 'styled-system';

import { nonForwardingProps } from '../../constants/styles';

type ContentBoundaryProps = {
  as?: string;
  maxWidth?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
};

const ContentBoundary = styled.div.withConfig({
  shouldForwardProp: (prop) => !nonForwardingProps.includes(prop),
})<ContentBoundaryProps>(
  () => css`
    width: 100%;

    ${layout};
    ${flexbox};
    ${space};
  `,
);

ContentBoundary.defaultProps = {
  maxWidth: '1400px',
  display: 'flex',
};

export default ContentBoundary;
