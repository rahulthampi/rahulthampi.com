import styled from 'styled-components';

import { ReactComponent as UnderConstruction } from '../../components/Illustrations/underConstruction.svg';

export const SUnderConstruction = styled(UnderConstruction)`
  width: 100%;
  height: auto;
  max-height: clamp(320px, 1.5rem + 2vw, 720px);
`;
