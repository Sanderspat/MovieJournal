import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';


function NavBar() {
    return (<div>
   
      <Navbar bg="dark" variant="dark" className='NavTitle'>
        <Container>
        <Navbar.Brand href="/">Home Page</Navbar.Brand>
        <Nav className="me-auto">
          <div><Nav.Link href="/moviepage">My Movies</Nav.Link></div>
        </Nav>
        </Container>
      </Navbar>

    </div> 
    );
  }
  
  export default NavBar;