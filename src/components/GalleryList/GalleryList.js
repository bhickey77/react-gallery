import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class GalleryList extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                {this.props.galleryList.map(item => {
                    return <Grid item xs={4} sm={3}> 
                        <GalleryItem key={item.path} item={item} />
                    </Grid>
                })}
            </Grid>
        );
    }
}

export default withStyles(styles)(GalleryList);
