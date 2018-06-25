import React, { Component } from 'react';
import GalleryImage from '../GalleryImage/GalleryImage';
import Button from '@material-ui/core/Button';
import './GalleryItem.css';

class GalleryItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingDescription: false,
      imageClass: 'image'
    }
  }
  
  toggleDescription = () => {
    if (this.state.showingDescription) {
      this.setState({
        imageClass: 'image',
        showingDescription: !this.state.showingDescription
      })
    } else {
      this.setState({
        imageClass: 'image fadingImage',
        showingDescription: !this.state.showingDescription
      })      
    }
  }

  handleLike = () => {
    this.props.sendLike(this.props.item.id);
  }

  render() {
    return (
      <div className="square" onClick={this.toggleDescription}>
        <GalleryImage item={this.props.item}/>
        <span className="button">
          <Button onClick={this.handleLike} variant="contained" color="primary">
            Love this!
          </Button>
        </span>
        <span>   Likes: {this.props.item.likes}</span>
      </div>
    );
  }
}

export default GalleryItem;
