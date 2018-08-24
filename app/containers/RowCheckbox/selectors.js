import { createSelector } from 'reselect';

/**
 * Direct selector to the rowCheckbox state domain
 */
const selectRowCheckboxDomain = (state) => state.get('rowCheckbox');
const selectRowCheckboxTable = props => (state) => props.tableName ? state.getIn(['vesTable', 'selected', props.tableName]) : false;
const selectRowCheckboxIsChecked = props => (state) => props.id ? state.get(props.id) : false;

/**
 * Other specific selectors
 */


/**
 * Default selector used by RowCheckbox
 */

const makeSelectRowCheckbox = (props) => createSelector(
  selectRowCheckboxDomain,
  selectRowCheckboxTable(props),
  selectRowCheckboxIsChecked(props)
);

export default makeSelectRowCheckbox;
export {
  selectRowCheckboxDomain,
};
