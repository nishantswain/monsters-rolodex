import React from 'react';
import {Card} from '../card/card'
import './cardlist.style.css'


const Cardlist=props=>{

    return(
        <div className='card-list'>
            {
                props.monsters.map(monster=>(
                <Card  key={monster.id} monster={monster}>  </Card>
  
                ))

            }
        </div>
    )
}


export default Cardlist;