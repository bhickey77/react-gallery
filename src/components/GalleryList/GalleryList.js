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
            <Grid alignItems={'center'} container spacing={32}>
                {this.props.galleryList.map(item => {
                    return <Grid alignItems={'center'} item lg={2} md={3} sm={6} xs={12}> 
                        <GalleryItem sendLike={this.props.sendLike} key={item.path} item={item} />
                    </Grid>
                })}
            </Grid>
        );
    }
}

export default withStyles(styles)(GalleryList);
