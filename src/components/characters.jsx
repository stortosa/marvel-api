import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Characters extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="wrap">
        <div className="grid" key={this.props.index}>
          <img className="card-image" src={this.props.character.thumbnail.path + "/portrait_fantastic.jpg"} alt="character img" />
          <h1 className="card-states" key={this.props.index} >{this.props.character.name}</h1>
          <p className="card-text">{this.props.character.description}</p>
          <ul>
            {this.props.character.urls.map((url, idx) => {
              return <li key={idx}><a href={url.url} target="_blank" rel="noopener noreferrer">{url.type}</a></li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
