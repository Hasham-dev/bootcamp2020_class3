import React from "react"

function Dinner(prop){
    return(
        <div>
            <h1>Hello! Today we are serving {prop.todayDish}</h1>
            <h1>Hello! Today sweet dish is {prop.todaySweet}</h1>
        </div>  
    );
}

export default Dinner;