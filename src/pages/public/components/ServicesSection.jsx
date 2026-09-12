import { Container, Row, Col } from 'react-bootstrap'
import ServiceIcon from '../../../components/ServiceIcon'
import { services } from '../../../data/site'

export default function ServicesSection() {
  return (
    <section id="services" className="kuko-section services-section">
      <Container>
        <div className="section-header">
          <span className="section-eyebrow">What We Offer</span>
          <h2>Our Services</h2>
          <p>Everything you need for beautiful, well-crafted nails.</p>
        </div>
        <Row className="g-3 g-md-4">
          {services.map((s) => (
            <Col md={6} lg={4} key={s.name}>
              <div className="kuko-card">
                <div className="kuko-card__body">
                  <div className="kuko-icon-well">
                    <ServiceIcon type={s.icon} />
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}