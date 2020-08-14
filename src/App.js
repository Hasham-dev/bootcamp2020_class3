import React from 'react';
import Dinner from './dinner'
function App() {
  
    return(
      <div>
      <Dinner todayDish="Chicken Karai" todaySweet="Kheer"/>
      <hr/>
      <Dinner todayDish="Daal Chawal" todaySweet="Gajar ka halwa"/>
      <hr/>
      <Dinner todayDish="Pizza" todaySweet="Jalebi"/>
      </div>
  );
     
  
}

export default App;
