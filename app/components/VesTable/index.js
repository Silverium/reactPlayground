/**
*
* VesTable
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';


function VesTable(props) {
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

      {content}

    </Wrapper>
  );
}

VesTable.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default VesTable;
