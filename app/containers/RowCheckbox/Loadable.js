/**
 *
 * Asynchronously loads the component for RowCheckbox
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
