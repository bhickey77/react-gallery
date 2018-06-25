import React, { Component } from 'react';
import './GalleryImage.css';

class Image extends Component {
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

  render() {
    return (
      <div className="frame-square" onClick={this.toggleDescription}>
        <div className="crop">
          <div className="description">
            {this.state.showingDescription && <p>{this.props.item.description}</p>}
          </div>
          <div className={this.state.imageClass}>
            <img src={this.props.item.path} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Image;