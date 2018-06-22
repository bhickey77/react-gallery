import React, { Component } from 'react';
import './GalleryList.css';

class GalleryList extends Component {
  render() {
    return (
      <ul className="GalleryList">
        {this.props.galleryList.map(item => <GalleryItem item={item} />)}
      </ul>
    );
  }
}

export default GalleryList;
