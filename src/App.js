import './App.css';
import {Brand,Cta,Navbar} from "./components";
import {Blog, Features, Footer, Header, Posibility, WhatGpt3} from "./containers";

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Posibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
