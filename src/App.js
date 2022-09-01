import './App.css';
import { Filter } from './Components/Filter';
import { Gymlist } from './Components/Gymlist';
import styles from "./Styles/Layout.module.css"
import { Searchbox } from './Components/Searchbox';
import { Fitnessexp } from './Components/Fitnessexp';
import React from 'react';
import { Footer } from './Components/Footer';
function App() {
  let [gymList, setgymList] = React.useState([]);
  return (
    <div className="App">
      <div style={{width:"100%",height:"300px",display:"flex",margin:"auto"}}>
        <img style={{width:"100%",height:"100%"}}src="https://i.postimg.cc/KYsNGRrj/gym.png"></img>
      </div>
      <div style={{width:"90%", margin:"auto",marginTop:"2%"}}>
      <Searchbox/>
      </div>
      <div className="mainContainer">
        <Filter gymList={gymList} setgymList={setgymList}></Filter>
        <Gymlist gymList={gymList} setgymList={setgymList}></Gymlist>
      </div>
      <Fitnessexp></Fitnessexp>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
