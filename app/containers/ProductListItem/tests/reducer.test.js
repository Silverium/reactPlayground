
import { fromJS } from 'immutable';
import productListItemReducer from '../reducer';

describe('productListItemReducer', () => {
  it('returns the initial state', () => {
    expect(productListItemReducer(undefined, {})).toEqual(fromJS({}));
  });
});
