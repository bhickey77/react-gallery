import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {
    render() {
        return (
            <ul className="GalleryList">
                {this.props.galleryList.map(item => <GalleryItem key={item.path} item={item} />)}
            </ul>
        );
    }
}

export default GalleryList;
