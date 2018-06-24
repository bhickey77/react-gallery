import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingDescription: false
    }
  }
  
  toggleDescription = () => {
    this.setState({
      showingDescription: !this.state.showingDescription
    })
  }


  render() {
    return (
      <div className="square" onMouseOver={this.toggleDescription} onMouseLeave={this.toggleDescription}>
        <div className="description">
          {this.state.showingDescription && <p>{this.props.item.description}</p>}
        </div>
        <div className="image">
          <img src={this.props.item.path} alt="" />
        </div>
      </div>
    );
  }
}

export default GalleryItem;
