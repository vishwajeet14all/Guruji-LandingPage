import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/home.png";
import BG from "../assets/beautiful.png";
import "../App.css";
import SecurePayment from "../assets/SecurePayment.png";
import Secure from "../assets/secure.png";
import Verified from "../assets/Verified.png";
import VerifiedAst from "../assets/VerifiedAst.png";
import Private from "../assets/Private.png";
import Private1 from "../assets/private1.png";
import refund from "../assets/refund.png";
import ref from "../assets/ref.png";
import cust from "../assets/cust.png";
import customer from "../assets/Customer.png";
import scroll from "../assets/scroll.png";

function BasicExample() {
  return (
    <div
      className="text-light"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundColor: "#A74800",
        backgroundSize: "cover",
      }}
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ height: "65px", width: "140px" }} src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto ">
              <Nav.Link className="link-light" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="link-light" href="#link">
                Call With Astrologer
              </Nav.Link>
              <Nav.Link className="link-light" href="#link">
                Live(Comming Soon)
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className="d-flex justify-content-center">“Astrology for Clarity”</h1>
      <br />

      <p className="d-flex justify-content-center text-center ">
        Your Name is a Vedic Astrologer and has expertise in Vaastu <br /> and
        Mantra Theraphy
      </p>
      <br />

      <div className="btnav">
        <button className="Navbt">Consult Now</button>
      </div>
      <br />

      <div className="navicons">
        <div>
          <img src={cust} alt="" />
          <img src={customer} alt="" />
        </div>
        <div>
          <img className="private" src={refund} alt="" />
          <img src={ref} alt="" />
        </div>
        <div>
          <img className="private" src={Private1} alt="" />
          <img src={Private} alt="" />
        </div>
        <div>
          <img src={Verified} alt="" />
          <img src={VerifiedAst} alt="" />
        </div>
        <div>
          <img src={Secure} alt="" />
          <img src={SecurePayment} alt="" />
        </div>
      </div>
      <br />
      <div className="scroll">        
        <img src={scroll} alt="" />
      </div>
      <br />
    </div>
  );
}

export default BasicExample;
