import { Container, Row, Col } from 'react-bootstrap'
import { hero } from '../../../data/site'

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <span className="hero-badge">
              <span className="badge-icon"></span>
              Kuko Bar Nail Expert
            </span>
            <h1>
              Beautiful Nails.{' '}
              <span className="highlight">Expert Care.</span>
            </h1>
            <p className="hero-subtitle">
              Professional nail care, creative designs, and relaxing salon experiences made for you.
            </p>
            <div className="hero-actions">
              <a className="btn btn-kuko-primary" href="#book">Book Now</a>
              <a className="btn btn-kuko-outline" href="#services">Explore Services</a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-visual">
              <div className="hero-visual__frame">
                <span className="hero-visual__chip">Creative Nail Studio</span>
                {hero.video ? (
                  <video
                    className="hero-visual__photo"
                    src={hero.video}
                    poster={hero.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : hero.image ? (
                  <img
                    src={hero.image}
                    alt="Kuko Bar nail design"
                    className="hero-visual__photo"
                    loading="lazy"
                  />
                ) : null}
                <span className="" />
                <span className="" />
                <span className="" />
                <span className="" />
              </div>
              <div className="floating-card">
                <div className="fc-rating">
                  <span className="star">★</span> 4.9
                </div>
                <div className="fc-note">Rated by 2,000+ happy clients</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}