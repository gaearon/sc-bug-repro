import * as React from 'react';

let Something = require('../components/Something').default
if (typeof window !== 'undefined') {
  Something = React.lazy(() => import('../components/Something').then(e =>
    new Promise(resolve => setTimeout(() => resolve(e), 2000))
  ));
}

export default function MyPage() {
  return (
    <React.Suspense fallback={<h2>oh no...</h2>}>
      <Something />
    </React.Suspense>
  )
}