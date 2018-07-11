
import { fromJS } from 'immutable';
import vesTableReducer from '../reducer';

describe('vesTableReducer', () => {
  it('returns the initial state', () => {
    expect(vesTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
