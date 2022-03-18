import styles from './Promocoes.module.css'
import Table from 'react-bootstrap/Table'
// import Button from 'react-bootstrap/Button'

import Dropdown from 'react-bootstrap/Dropdown'

function Promocoes() {
  return (
    <section className={styles.promocoes_container}>
      <h1>PROMOÇÕES</h1>

      {/* ===================== TABELA  */}
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Região</th>
              <th>Estado</th>
              <th>Destino</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nordeste</td>
              <td>Bahia</td>
              <td>Salvador</td>
              <td>R$ 1.000,00</td>
            </tr>
            <tr>
              <td>Sudeste</td>
              <td>Rio de Janeiro</td>
              <td>Guaratiba</td>
              <td>R$ 5.500,00</td>
            </tr>
            <tr>
              <td>Sul</td>
              <td>Rio Grande do Sul</td>
              <td>Gramado</td>
              <td>R$ 2.500,00</td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* //////////// ======== TABELA */}

      {/* botoes */}
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Gerenciamento
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/criarpromo">Criar</Dropdown.Item>
            <Dropdown.Item href="/registros">Ver Registros</Dropdown.Item>
            <Dropdown.Item href="/deletar">Deletar</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* ///////// ========== botoes */}
    </section>
  )
}

export default Promocoes
