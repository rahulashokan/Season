import React from "react";
const getSeason=(lat,month) =>{

    if (month>2 && month<9){
     return lat>1 ? 'summer': 'Winter';
    }else{
     return lat>1 ? 'Winter': 'Summer';
    }
}


const SeasonDisplay= props =>{
    console.log(props.lat);
    const season= getSeason(props.lat,new Date().getMonth());
    return<div>{season}</div>;
    
};
export default SeasonDisplay;