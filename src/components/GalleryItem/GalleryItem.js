import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.path} />
        <p>{this.props.item.description}</p>
      </div>
    );
  }
}

export default GalleryItem;
