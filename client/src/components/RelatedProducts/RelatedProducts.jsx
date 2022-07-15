import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';
import OutfitList from './OutfitList';

const RelatedHeader = styled.h3`
  text-transform: uppercase;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

function RelatedProducts() {
  return (
    <MainContainer>
      <RelatedHeader>Related Products</RelatedHeader>
      <ProductList />
      <RelatedHeader>Your Outfit</RelatedHeader>
      <OutfitList />
    </MainContainer>
  );
}

export default RelatedProducts;
