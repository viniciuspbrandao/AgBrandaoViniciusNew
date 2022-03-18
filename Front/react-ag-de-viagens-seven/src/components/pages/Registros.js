// import styles from './Passeios.module.css'
import styles from './Registros.module.css'
import Table from 'react-bootstrap/Table'

function Passeios() {
  return (
    <section className={styles.passeios_container}>
      <h1>REGISTROS</h1>

      <h5>PASSEIOS</h5>

      {/* ===================== TABELA PASSEIOS ===================== */}
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
      {/* //////////// ======== TABELA =====================*/}

      <h5 className={styles.registros_subtitulo}> PROMOÇÕES</h5>

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
    </section>
  )
}

export default Passeios
