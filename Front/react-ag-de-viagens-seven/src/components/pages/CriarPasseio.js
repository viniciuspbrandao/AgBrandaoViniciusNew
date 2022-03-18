import styles from './Promocoes.module.css'
// import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Criar() {
  return (
    <section className={styles.promocoes_container}>
      <h1>CRIAR PASSEIO</h1>

      <div className={styles.promocoes_container}>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label></Form.Label>
            <Form.Control type="" placeholder="REGIÃO" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label></Form.Label>
            <Form.Control type="" placeholder="ESTADO" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label></Form.Label>
            <Form.Control type="" placeholder="DESTINO" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label></Form.Label>
            <Form.Control type="" placeholder="PREÇO" />
          </Form.Group>
        </Form>
      </div>

      <>
        <Button href="#">CRIAR</Button>
      </>
    </section>
  )
}

export default Criar
