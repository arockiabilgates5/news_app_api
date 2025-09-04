import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({setCategories}) => {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="">
            <Badge bg='danger' className='p-3'>News App</Badge>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategories('business')}>Business</Nav.Link>
            <Nav.Link onClick={() => setCategories('sports')}>Sports</Nav.Link>
            <Nav.Link onClick={() => setCategories('entertainment')}>Entertainment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
