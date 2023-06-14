import "../App.css";
import ControlledCarousel from '../components/ControlledCarousel'
import Trust from '../assets/trust.png'
import Vector1 from '../assets/Vector1.png'
import Vector2 from '../assets/Vector2.png'
import scroll from "../assets/scroll.png";





function Header() {
  return (
    <>
    <div style={{backgroundColor:"#FFEFE3",paddingTop:"45px"}}>
      <div class="d-flex justify-content-center">
        <img src={Vector1} alt="" />
      </div>
      <br />
      <div class="d-flex justify-content-center">   
        <img style={{width:"35px",height:"35px"}} src={Vector2} alt="" /> 
        <h2 style={{color:"#D97122"}}> User Testimonial </h2> 
        <img style={{width:"35px",height:"35px"}}  src={Vector2} alt="" />
      </div>
      <br />
      <br />
      </div>

      <div className="bg1 d-flex justify-content-center ">
        <div className="bg   ">
          <ControlledCarousel />
        </div>
      </div>

      <img className="midimage" style={{backgroundColor:"#FFEFE3",paddingTop:"45px"}} src={Trust} alt="" />
      
      <div style={{backgroundColor:"#FFEFE3",paddingTop:"45px",width:"100"}} className="scroll">        
        <img src={scroll} alt="" />
      </div>

      <div style={{backgroundColor:"#FFEFE3",paddingTop:"45px"}} className="d-flex justify-content-center">  

        <img className="midimage" style={{width:"35px",height:"35px"}} src={Vector2} alt="" /> 
        <h2 style={{color:"#D97122"}}>  Premium Astrologers  </h2> 
        <img  style={{width:"35px",height:"35px"}} src={Vector2} alt="" />
      </div>
    </>
  );
}

export default Header;