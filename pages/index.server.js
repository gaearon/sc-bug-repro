import styles from '../styles/Home.module.css'

export default function Home({ router }) {
  console.log('render. router is ', router)
  return (
    <h1>Hi {router.pathname}</h1>
  )
}
