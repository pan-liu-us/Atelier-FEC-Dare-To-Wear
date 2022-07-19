import React from 'react';
import styled from 'styled-components';
import ProductDescription from './ProductDescription';
import ProductFeatureList from './ProductFeatureList';

const DescriptionAndFeatures = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function OverviewDescription(props) {
  const { overview } = props;
  return (
    <DescriptionAndFeatures>
      <ProductDescription
        slogan={overview.slogan}
        description={overview.description}
      />
      <ProductFeatureList
        features={overview.features}
      />
    </DescriptionAndFeatures>
  );
}
