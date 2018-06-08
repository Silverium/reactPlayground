/**
*
* VesList
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Ul from './Ul';
import Wrapper from './Wrapper';

function VesList(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);
// If we have items, render them
  if (props.items) {
    content = props.items.map((item) => (
      <ComponentToRender key={`item-${item._id}`} item={item} />
  ));
  } else {
  // Otherwise render a single component
    content = (<ComponentToRender />);
  }
  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
}

VesList.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,

};

export default VesList;
