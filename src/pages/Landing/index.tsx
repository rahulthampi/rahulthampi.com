import React from 'react';

import Box from '../../components/Box';
import Text from '../../components/Text';
import Cover from '../../components/Cover';
import ContentBoundary from '../../components/ContentBoundary';
import { SUnderConstruction } from './styled';

const Landing: React.FC = () => {
  return (
    <Cover as="main" minHeight="100vh" minWidth="320px">
      <ContentBoundary justifyContent="center" alignItems="center">
        <Box
          display="grid"
          justifyContent="center"
          gridGap={4}
          width={1}
          px={32}
          py={64}
        >
          <SUnderConstruction />

          <Text
            as="h3"
            textAlign="center"
            minFontSize="1rem"
            customFontSize="1rem + 2vw"
            maxFontSize="2rem"
            color="black"
            title="Under Construction"
          >
            Under Construction
          </Text>
        </Box>
      </ContentBoundary>
    </Cover>
  );
};

export default Landing;
