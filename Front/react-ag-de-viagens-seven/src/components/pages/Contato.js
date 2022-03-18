import styles from './Contato.module.css'

function Contato() {
  return (
    <section className={styles.contato_container}>
      <p>Para qualquer dúvida ou sugestão entre em contato!</p>
      <div>
        <h3>Fale Conosco:</h3>
        <p>
          E-mail: viagens@exemplo.com
          <br />
          Telefone: 3333-3333
        </p>
      </div>
    </section>
  )
}

export default Contato
