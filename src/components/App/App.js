import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      galleryList: []
    }
  }
  
  getGallery = () => {
    axios.get('/gallery')
        .then(response => {
            // console.log(`sucessfully got from the server: `, response.data);
            this.setState({
                galleryList: response.data
            });
        })
        .catch(error => {
            console.log(`error with the get /gallery server: `, error);
        })
  }
  
  
  render() {
    this.getGallery();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList galleryList={this.state.galleryList} />
      </div>
    );
  }
}

export default App;
