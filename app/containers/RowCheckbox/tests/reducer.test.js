
import { fromJS } from 'immutable';
import rowCheckboxReducer from '../reducer';

describe('rowCheckboxReducer', () => {
  it('returns the initial state', () => {
    expect(rowCheckboxReducer(undefined, {})).toEqual(fromJS({}));
  });
});
