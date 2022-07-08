import React from "react";
import Botonera from "./components/Botonera";
import Caja from "./components/Caja";
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:null
        };
    }
    
    render(){
        return (
            <>
                <Botonera/>
                <Caja/>
            </>
        );
    }
}

export default App;
