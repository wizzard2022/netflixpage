import React from "react";
import Card from "./Cards";
import Sdata from './Sdata';





const App = () => {
    return (<>

        <h1 className="heading_style">List of top 5 Netflix Searies in 2022</h1>
    
         {Sdata.map(function ncard(val){
            return(
            <Card 
            key = {val.id}
            imgsrc ={val.imgsrc}
            title = {val.title}
            sname = {val.sname}
            link = {val.link}
            />
        );
        })}


    </>);

    }

export default App;