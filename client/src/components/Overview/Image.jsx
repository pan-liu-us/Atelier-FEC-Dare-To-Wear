import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const MainImage = styled.img`
  position: relative;
  border: 1px;
  border-radius: 5px;
`;

function Image(props) {
  const { image } = props;

  if (image.thumbnail_url === null) {
    return (
      <div style={{ color: '#5D5F71' }}>NOT AVAILABLE</div>
    );
  }

  return (
    <MainImage src={image.thumbnail_url} />
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  }),
};

Image.defaultProps = {
  image: {},
};

export default Image;
