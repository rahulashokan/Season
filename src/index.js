import React from "react";
import  ReactDOM  from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";


    class App extends React.Component{

     state = {lat : null, errorMessage : ''};
        componentDidMount() {
            window.navigator.geolocation.getCurrentPosition(
                position1 =>this.setState({lat :position1.coords.latitude}),
                err =>this.setState({errorMessage :err.message}));

        }
        render(){
            
        
               
                    

                   if(this.state.lat && !this.state.errorMessage) {
                       return<SeasonDisplay lat={this.state.lat}/>
                   }
                   if(!this.state.lat && this.state.errorMessage){
                       return <div>Error : {this.state.errorMessage}</div>   
                   }
                    return <div>Loding...</div>
                    
                
    }   } 
    



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

