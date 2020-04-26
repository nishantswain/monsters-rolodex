import React from 'react';
import './searchbox.style.css'

 const Searchbox=({placeholder,changehandler})=>{

return(<div>

<div  >
      
      <input className='search' type="search" placeholder={placeholder} onChange={changehandler
       
    
       }    />

</div>

</div>)

}

export default Searchbox