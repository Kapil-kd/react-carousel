import logo from './logo.svg';
import './App.css';
import React ,{useState} from "react";

function App() {
const images = ["https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-photo/confluence-indus-zanskar-rivers-leh-ladakh-india_1150-11112.jpg?size=626&ext=jpg",
      "https://img.freepik.com/free-photo/olivebacked-sunbirds-feeding-child-cinnyris-jugularis_488145-1597.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-photo/beautiful-peacock-with-closed-tail-forest-with-lush-trees_181624-60499.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-photo/skogafoss-waterfall-iceland-guy-red-jacket-looks-skogafoss-waterfall_335224-593.jpg?size=626&ext=jpg",
"https://img.freepik.com/premium-photo/woman-praying-free-bird-enjoying-nature-sunset-background-hope-concept_34200-192.jpg?size=626&ext=jpg",
"https://img.freepik.com/free-photo/beautiful-aerial-shot-forest-enveloped-creepy-mist-fog_181624-2659.jpg?size=626&ext=jpg&ga=GA1.2.37887996.1677998263&semt=sph"];
const [Image,setImage] = useState(0);

const nextfn = ()=> setImage(Image == images.length-1 ? 0 : Image + 1);

const prefn = () => setImage(Image == 0 ? images.length-1 : Image - 1);



  return (
   <div>
    {images.map((item,index) => Image == index && 
    <div key={index}>
      <img src={item}/>
    </div>
    )}
    <div className='button'>
    <button onClick={prefn}>Previous</button>
    <button onClick={nextfn}>Next</button>
    </div>

   </div>
  );
}

export default App;
