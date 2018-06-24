import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingDescription: false,
      imageClass: 'image'
    }
  }
  
  showDescription = () => {
    this.setState({
      showingDescription: true,
      imageClass: 'image fadingImage'
    })
  }

  removeDescription = () => {
    this.setState({
      showingDescription: false,
      imageClass: 'image'
    })
  }

  render() {
    return (
      <div className="square" onMouseOver={this.showDescription} onMouseLeave={this.removeDescription}>
        <div className="description">
          {this.state.showingDescription && <p>{this.props.item.description}</p>}
        </div>
        <div className={this.state.imageClass}>
          <img src={this.props.item.path} alt="" />
        </div>
      </div>
    );
  }
}

export default GalleryItem;
