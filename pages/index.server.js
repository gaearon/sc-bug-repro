import styles from '../styles/Home.module.css'

// FAILS (but should work)
import * as Components from '../components/components'
const Thing = Components.Thing

// WORKS
// import Thing from '../components/thing.client'

export default function Home() {
  return (
    <>
      <h1>Hi</h1>
      <Thing />
    </>
  )
}
