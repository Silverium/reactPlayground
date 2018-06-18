/**
*
* LoadingCircular
*
*/

import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import Wrapper from './Wrapper';
const VesCircular = styled(CircularProgress)`
  position: relative;
  color: cyan;

  `;

function LoadingCircular() {
  return (
    <Wrapper>
      <VesCircular size={150} />
    </Wrapper>);
}

LoadingCircular.propTypes = {

};

export default LoadingCircular;
