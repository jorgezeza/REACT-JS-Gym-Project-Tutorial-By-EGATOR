import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title='About US' image={HeaderImage} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dolor quidem saepe, dignissimos nobis et similique quae autem nam cumque modi.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt='Our Story' />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum neque quibusdam explicabo, beatae
              in asperiores unde nulla impedit amet eligendi minus fuga
              itaque pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolores minus perspiciatis hic iste ex qui, non autem perferendis corporis natus commodi eum ratione dolorum?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cupiditate!</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum neque quibusdam explicabo, beatae
              in asperiores unde nulla impedit amet eligendi minus fuga
              itaque pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolores minus perspiciatis hic iste ex qui, non autem perferendis corporis natus commodi eum ratione dolorum?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt='Our Vision' />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt='Our Mission' />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum neque quibusdam explicabo, beatae
              in asperiores unde nulla impedit amet eligendi minus fuga
              itaque pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolores minus perspiciatis hic iste ex qui, non autem perferendis corporis natus commodi eum ratione dolorum?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cupiditate!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
