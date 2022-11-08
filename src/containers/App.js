import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

const App = () => {

const [ robots, setRobots ] = useState([]);
const [ searchfield, setSearchfield] = useState('');

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
},[])

const onSearchChange = (event) => {
    setSearchfield(event.target.value)
}

const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
});

return !robots.length ? (
    <div className="App">
        <h1>RoboFriends</h1>
        <div className="emptyBlock"></div>
        <h1 className="loading">Loading</h1>
    </div>
    )
:(
    <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
    </div>
    )
}


export default App;