import React, { Component } from 'react';
import { marvelApi } from '../services/marvel';
import Characters from './characters';
import axios from "axios";


export default class searchBar extends Component {
  constructor() {
    super()
    this.state = {
      characterQuery: "",
      characters: [],
    }
    this.isSearching = false;
  }

  handlerQuery(e) {
    let letters = e.target.value;
    this.setState({
      ...this.state,
      characterQuery: letters,
    })

  }


  searchQuery() {
    this.isSearching = !this.isSearching;
    this.searchingCharacter(this.state.characterQuery)
  }



  searchingCharacter(query) {
    if (query !== "") {
      axios.get(marvelApi.apiUrl + query + marvelApi.hash)
        .then(res => {
          console.log(res.data)
          const response = res.data.data.results
          // console.log("ENTTRA")

          console.log(response)
          this.setState({
            ...this.state,
            characters: response
          })
        })
    }
  }



  render() {
    return (
      <React.Fragment>

        <div className="search-box">
          <div>
            <input type="search" onChange={(e) => this.handlerQuery(e)} ></input>
            <button onClick={() => { this.searchQuery() }}>Search</button>
          </div>

          {this.isSearching
            ?
            <div className="">
              {this.state.characters.map((character, index) => {

                return <Characters character={character} index={index} />
              })}
            </div>
            :
            <div className="text">
              <h1>WELCOME TO MARVEL APP</h1>
              <h3>What is your favorite character of Marvel Universe?</h3>
              <p>Look for someone superheroe</p>
            </div>
          }
        </div>
      </React.Fragment>
    )
  }
}