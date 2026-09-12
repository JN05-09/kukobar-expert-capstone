import { Container, Navbar, Nav } from 'react-bootstrap'
import kukoLogo from '../../../icon/KukoBar_logo.jpg'
import { navItems } from '../../../data/site'

export default function NavbarSection() {
  return (
    <Navbar expand="lg" fixed="top" className="kuko-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">
          <img src={kukoLogo} alt="Kuko Bar" className="brand-logo" />
          Kuko Bar Nail Expert
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="kuko-nav" />
        <Navbar.Collapse id="kuko-nav">
          <Nav className="kuko-nav ms-lg-auto align-items-lg-center">
            {navItems.map((item) => (
              <Nav.Link key={item.label} href={item.href}>
                {item.label}
              </Nav.Link>
            ))}
            <a className="btn btn-kuko-ghost mt-2 mt-lg-0 ms-lg-2" href="#login">Login</a>
            <a className="btn btn-kuko-primary mt-2 mt-lg-0 ms-lg-2" href="#book">Book Now</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}