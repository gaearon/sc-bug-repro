import styles from '../styles/Home.module.css'

export default function Home({ router }) {
  return (
    <h1>Hi {router.pathname}</h1>
  )
}
