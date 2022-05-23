import * as React from 'react';

export default function MyPage() {
  React.useEffect(() => {
    console.log('effect')
  })
  return <h1>Hello</h1>
}