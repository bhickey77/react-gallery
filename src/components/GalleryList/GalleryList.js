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
    
    getGallery = () => {
        axios.get('/gallery')
            .then(response => {
                console.log(`sucessfully got from the server: `, response.data);
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
            <ul className="GalleryList">
            {this.state.galleryList.map(item => <GalleryItem item={item} />)}
            </ul>
        );
    }
}

export default GalleryList;
