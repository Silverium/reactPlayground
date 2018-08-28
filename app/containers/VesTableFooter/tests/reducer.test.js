
import { fromJS } from 'immutable';
import vesTableFooterReducer from '../reducer';

describe('vesTableFooterReducer', () => {
  it('returns the initial state', () => {
    expect(vesTableFooterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
