import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

      <h1 class="title red">Yacine</h1>
      <br/>
      <img src="imageInSrc.jpg" style={{width:"320px", height:"240px"}} />
      <br/>
      <img src="/imageInPublic.jpg" style={{width:"320px", height:"240px"}} />


      <video width="320" height="240" controls>

      <source src="myVideo.mp4" type="video/mp4" />

      </video>
      </div>
  );
}

export default App;
