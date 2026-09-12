import { Container, Row, Col } from 'react-bootstrap'
import { designs } from '../../../data/site'

export default function DesignsSection() {
  return (
    <section id="designs" className="kuko-section">
      <Container>
        <div className="section-header">
          <span className="section-eyebrow">Nail Styles</span>
          <h2>Featured Nail Designs</h2>
          <p>Discover styles made to match your personality.</p>
        </div>
        <Row className="g-3 g-lg-4">
          {designs.map((d) => (
            <Col xs={6} lg={3} key={d.name}>
              <div className="kuko-card">
                <div className={`kuko-card__visual ${d.tint}`}>
                  {d.image && (
                    <img
                      src={d.image}
                      alt={`${d.name} nail design`}
                      className="kuko-card__visual--photo"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="kuko-card__body">
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}