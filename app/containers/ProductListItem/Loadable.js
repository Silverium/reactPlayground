/**
 *
 * Asynchronously loads the component for ProductListItem
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
