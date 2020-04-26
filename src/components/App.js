import React,{Component} from 'react';
import '../App.css'
import Cardlist from './cardlist/Cardlist'
import Searchbox from './search-box component/Searchbox';



class App extends Component {

constructor()
{
  super()
  this.state={
    monsters:[],
    searchMonster:''
  }
}


componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users').
  then(Response=>(Response.json())).then(json=>(this.setState({monsters:json})));
}

changehandler=(e)=>(

  this.setState({searchMonster:e.target.value})

)

 render()
 {

  const {monsters,searchMonster} = this.state;

    const filteredMonsters= monsters.filter(monster=>
      monster.name.toString().toLowerCase().includes(searchMonster.toString().toLowerCase())
      )

  
   return(<div className='App'>
    <h1>Monsters Rolodex</h1>
  <Searchbox placeholder={'search monsters'}
       changehandler={this.changehandler}
       />
 
  <Cardlist monsters={filteredMonsters}/>
    
   </div>)
 }
}

export default App;
