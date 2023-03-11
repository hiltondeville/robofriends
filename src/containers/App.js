import React from "react";

import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';




class App extends React.Component {   //need to use the class method to be able  to use state

    constructor() {
        super()// in order to use this we need to call super
        this.state = { // this gets the robot info from the array of objects and uses the searchfield
          robots: [],
          searchfield: ''

        } 
    
    } // lifecycle methods/hooks. They run everytime a component does something and the App is run

    componentDidMount() {//this is part of React so we don't need to use the arrow function like we do onSearchChange
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
        
       
    
        
    }

    onSearchChange = (event) => { //without the arrows the event is unkownn to the onSearchChange function
        this.setState({ searchfield: event.target.value })
    
    }

    render() {//with a constructor we need to render the content

        const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })

    if(this.state.robots.length === 0) {
        return(<h1>Loading</h1>)
    } else { //if there are no robots to show then a loading sign will show
    return(
        <div className='tc'>
            <h1 className="f1">Robot Friends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>  
            </Scroll>
        </div>
        
    );
    }
    }
}

export default App;