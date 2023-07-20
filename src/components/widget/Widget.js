import classes from './Widget.module.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react";
const Widget = () => {
    return(
        <div className={classes.widgets}>
            <div className={classes.widgets1}>
                <h1>Welcome Akintan,</h1>
                <p>Stay up to date with your store's current status.</p>
            </div>
            <div className={classes.widgets2}>
              <div><button className={classes.widgets3}>
                <CalendarMonthIcon />
               <p>Jun 2023</p>
               <ArrowDropDownIcon />
               </button>
               </div>
               <button className={classes.widgets4}><p>Download PDF</p></button> 
            </div>
        </div>
    )
}

export default Widget;