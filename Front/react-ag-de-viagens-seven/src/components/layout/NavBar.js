import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav class={styles.NavBar}>
      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
            <Link to="/passeios">Passeios</Link>
          </li>

          <li className={styles.item}>
            <Link to="/promocoes">Promoções</Link>
          </li>

          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar
