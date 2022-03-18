import styles from './Passeios.module.css'
import Table from 'react-bootstrap/Table'
// import Button from 'react-bootstrap/Button'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'

function Passeios() {
  return (
    <section className={styles.passeios_container}>
      <h1>PASSEIOS</h1>

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
              <td>Norte</td>
              <td>Amazônia</td>
              <td>Selva</td>
              <td>R$ 1.500,00</td>
            </tr>
            <tr>
              <td>Nordeste</td>
              <td>Bahia</td>
              <td>Salvador</td>
              <td>R$ 1.000,00</td>
            </tr>
            <tr>
              <td>Centro-Oeste</td>
              <td>Distrito Federal</td>
              <td>Brasília</td>
              <td>R$ 2.000,00</td>
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
            <Dropdown.Item href="#/action-1">Criar</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Ver Registros</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Deletar</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* ///////// ========== botoes */}
    </section>
  )
}

export default Passeios
