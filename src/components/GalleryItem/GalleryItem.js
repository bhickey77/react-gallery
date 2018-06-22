import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  render() {
    return (
        <img src={this.props.item.path} />
    );
  }
}

export default GalleryItem;
