import React, { Component } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {
    constructor(props){
        super(props);
        this.state = {
            galleryList: []
        }

    }

    render() {
        this.getGallery();
        return (
            <ul className="GalleryList">
            {this.state.galleryList.map(item => <GalleryItem item={item} />)}
            </ul>
        );
    }
}

export default GalleryList;
