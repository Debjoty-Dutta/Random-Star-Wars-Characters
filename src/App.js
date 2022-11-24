import './App.css';
import React from 'react';



class StarWars extends React.Component {
  constructor () {
    super()
    this.state = {
      loadedchracter: false,
      name: null,
      height: null,
      mass: null,
      gender: null,
      homeworld: null,
      species: null,
      image: null
    }
  }
  getNewCharcter (){
    const url = `https://akabab.github.io/starwars-api/api/id/${Math.floor(Math.random() * 88)}.json`
    fetch(url)
      .then(responce => responce.json())
      .then(data => {
        console.log(data.gender)
        // if (data.gender === "male"){
        //   // this.setState({
        //   //   loadedchracter: false
        //   // })
        //   <getNewCharcter/>
        // }
        this.setState({
          loadedchracter: true,
          name: data.name,
          height: data.height,
          mass: data.mass,
          gender: data.gender,
          homeworld: data.homeworld,
          species: data.species,
          image: data.image
        })
      })
      
  }
  render() {
    return (
      <div>
        {
          this.state.loadedchracter &&
          <div>
            <p>
              <a href ={this.state.image} target="_blank" rel="noreferrer"><img src = {this.state.image} alt=""></img></a>
            </p>
            <h1>
              Name: {this.state.name}
            </h1>
            <p>
              Height: {this.state.height}
            </p>
            <p>
              mass: {this.state.mass}
            </p>
            <p>
              Gender: {this.state.gender}
            </p>
            <p>
              {/* <a href={this.state.homeworld}>Homeworld: {this.state.homeworld}</a> */}
              Homeworld: {this.state.homeworld}
            </p>
            <p>
              Species: {this.state.species}
            </p>
            <p>
              Image: <a href={this.state.image}>{this.state.image}</a>
            </p>
          </div>
        }
        
        <button 
          type='button' className='btn' onClick={() => this.getNewCharcter()}
        >
          Randomized Character
        </button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
