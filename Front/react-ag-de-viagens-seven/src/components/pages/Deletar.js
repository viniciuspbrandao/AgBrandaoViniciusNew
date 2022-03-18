import styles from './Promocoes.module.css'
// import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Criar() {
  return (
    <section className={styles.promocoes_container}>
      <h1>DELETAR</h1>

      <div className={styles.promocoes_container}>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label></Form.Label>
            <Form.Control type="" placeholder="ID do passeio ou promoção" />
          </Form.Group>
        </Form>
      </div>

      <>
        <Button href="#">DELETAR</Button>
      </>
    </section>
  )
}

export default Criar
