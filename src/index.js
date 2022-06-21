import React from "react";
import  ReactDOM  from "react-dom/client";



    class App extends React.Component{

        constructor(props){
            super(props);
            this.state={lat : null, errorMessage : ''};
        }
        componentDidMount() {
            window.navigator.geolocation.getCurrentPosition(
                position1 =>{
                    this.setState({lat :position1.coords.latitude});
                    console.log(position1);
                },
                err =>this.setState({errorMessage :err.message}));

        }
        render(){
            
        
               
                    

                   if(this.state.lat && !this.state.errorMessage) {
                       return<div>latitude :{this.state.lat}</div>
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

