import { Container } from 'react-bootstrap'

export default function CtaSection() {
  return (
    <section id="book" className="kuko-section">
      <Container>
        <div className="cta-band">
          <h2>
            Ready for Your Next <span className="highlight">Nail Experience?</span>
          </h2>
          <p>Book your next appointment and let our nail experts take care of the rest.</p>
          <a className="btn btn-kuko-primary btn-lg" href="#book">Book Now</a>
        </div>
      </Container>
    </section>
  )
}