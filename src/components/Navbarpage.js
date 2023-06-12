import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarpage()
{
    return(
      <div className='Navdiv' >

      <Navbar bg="primary" variant="dark" className='Navdiv1'>
        <Container>
          <Navbar.Brand >Control Your Mind Control Your Health</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link target='_blank' href="https://www.cdc.gov/physicalactivity/basics/older_adults/index.htm">Physical Activities</Nav.Link>
            <Nav.Link target='_blank' href="https://pib.gov.in/PressReleasePage.aspx?PRID=1806506#:~:text=Indira%20Gandhi%20National%20Old%20Age,the%20age%20of%2080%20years.">Government Services</Nav.Link>
            <Nav.Link target='_blank' href="https://www.cdc.gov/nutrition/index.html">Nutrition Plans</Nav.Link>

            <NavDropdown title="Healthy Charts" id="basic-nav-dropdown">
              <NavDropdown.Item target='_blank'  href="https://www.hdfclife.com/financial-tools-calculators/bmi-calculator"> Body Mass Index(BMI)</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://ccimindia.org/blood-pressure-chart/">Blood Pressure(BP)</NavDropdown.Item>           
            </NavDropdown>

            <NavDropdown title="Excercises" id="basic-nav-dropdown">
              <NavDropdown.Item  target='_blank' href="https://www.godigit.com/health-insurance/exercise/exercise-for-older-people"> Aerobic Excersises for Better Health</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://www.godigit.com/health-insurance/exercise/yoga-for-back-pain">Yoga as a Solution</NavDropdown.Item>           
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
}
export default Navbarpage;