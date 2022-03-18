import styles from './Home.module.css'
import imgOne from '../../img/ImageOne.jpg'
import imgTwo from '../../img/ImageTwo.jpg'
import imgThree from '../../img/ImageThree.jpg'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Descubra o Mundo!</h1>

      <div className={styles.home_containercarousel}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={imgOne} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={imgTwo} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={imgThree} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <h2>Sobre Nós</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        reiciendis nesciunt, similique odio, repellat laborum soluta, deleniti
        in beatae error at animi laboriosam accusamus illum inventore corporis!
        Expedita, nesciunt harum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis in neque maxime modi, soluta cum dicta dolor
        expedita harum dolore error eveniet aut reprehenderit ab, maiores vero
        doloremque nemo libero?
      </p>
    </section>
  )
}

export default Home
