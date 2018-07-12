/**
 *
 * Asynchronously loads the component for VesTable
 *
 */

import Loadable from 'react-loadable';
import LoadingCircular from 'components/LoadingCircular';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingCircular,
});

