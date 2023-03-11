import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {



    return(

    <div>
        {
       
      robots.map((user, i) => {

      return (
      <Card 
         key={robots[i].id}  //key property is useful for when a card gets deleted, it will realise that the key isn't prestent 
         id={robots[i].id}   // and assists with DOM manipulation, construction
         name={robots[i].name} 
         email={robots[i].email}
         phone={robots[i].phone}
         address={robots[i].address}

       />
      );
     })
        
    }  
    </div>
    );
}


export default CardList;