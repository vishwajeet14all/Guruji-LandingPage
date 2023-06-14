import './App.css';
import Basic from './components/BasicExample'
import Frame from './assets/Frame.png'

function App() {


  
  return (
    <div >
      <Basic/>
      <div style={{display:"flex",justifyContent:"center"}}>
      <img  src={Frame} alt="" />               
      </div>
      <div  style={{display:"flex",justifyContent:"center"}} >
      <img  src="https://user-images.githubusercontent.com/99132893/232808909-7217f195-5c55-4907-a79c-9fd5c7fd1420.png" alt="" />
      </div>
    </div>
  );
}

export default App;
