import React from 'react';
import classes from './Feature.module.css';
//import { CircularProgress } from '@mui/material';
//import 'react-circular-progress/dist/styles.css';

const Feature = () => {
    return(
    <div className={classes.Feature}>
        <h3>Revenue By Channel</h3>
        <div className={classes.button}>
            <div className={classes.featuredChart}>
                   
            </div>
        </div>
    </div>
    )

}

export default Feature;