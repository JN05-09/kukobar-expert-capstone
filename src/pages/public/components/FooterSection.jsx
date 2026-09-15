import { Container, Row, Col } from 'react-bootstrap'
import kukoLogo from '../../../icon/KukoBar_badge.png'
import { navItems, contact, storeHours } from '../../../data/site'

export default function FooterSection() {
  return (
    <footer id="about" className="site-footer">
      <Container>
        <Row className="g-4">
          <Col lg={5} md={6}>
            <div className="footer-brand">
              <img src={kukoLogo} alt="Kuko Bar" className="brand-logo brand-logo--footer" />
              Kuko Bar Nail Expert
            </div>
            <p className="footer-brand-desc">Professional nail care and creative nail experiences.</p>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="footer-contact-item">{contact.address}</span>
              </div>
              <div className="footer-contact-row">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                <a className="footer-contact-link" href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="footer-contact-row">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
                </svg>
                <a className="footer-contact-link" href={contact.phoneHref}>{contact.phone}</a>
              </div>
            </div>
            <div className="footer-social">
              <a className="footer-social-btn" href={contact.facebook} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} xs={6}>
            <div className="footer-heading">Navigate</div>
            {navItems.slice(0, 5).map((item) => (
              <a className="footer-link" key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="footer-heading">Contact & Hours</div>
            {storeHours.map((h) => (
              <span className="footer-hours" key={h}>{h}</span>
            ))}
          </Col>
        </Row>
        <hr className="footer-divider" />
        
      </Container>
    </footer>
  )
}