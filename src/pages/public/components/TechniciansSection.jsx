import { Container, Row, Col } from 'react-bootstrap'
import { technicians } from '../../../data/site'

export default function TechniciansSection() {
  return (
    <section id="technicians" className="kuko-section">
      <Container>
        <div className="section-header">
          <span className="section-eyebrow">Our Team</span>
          <h2>Meet Our Nail Experts</h2>
          <p>Skilled technicians dedicated to giving you your best nail experience.</p>
        </div>
        <Row className="g-3 g-md-4 justify-content-center">
          {technicians.map((t) => (
            <Col md={6} lg={4} key={t.name}>
              <div className="kuko-card kuko-card--tech">
                <div className="kuko-card__visual">
                  <div className="tech-avatar">{t.initial}</div>
                </div>
                <div className="kuko-card__body text-center">
                  <h3>{t.name}</h3>
                  <div className="tech-role">Nail Technician</div>
                  <p>{t.specialty}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}