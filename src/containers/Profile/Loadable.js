import React from 'react';
import Loadable from 'react-loadable';

const ProfileLoadable = Loadable({
  loader: () => import('./Profile'),
  loading: () => <div>Loading</div>
});

export default ProfileLoadable;
