import React from 'react';
import classes from './Change.module.css';
import OfflineShareIcon from '@mui/icons-material/OfflineShare';
import TodayIcon from '@mui/icons-material/Today';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GroupIcon from '@mui/icons-material/Group';
const Change =({type}) => {
    let data;
    switch(type){
        case "Total Revenue":
        data={
            icon: <OfflineShareIcon className={classes.Icon} />,
            title:"Total Revenue",
            ismoney:" NGN 600,500",
            month:"+37 from last month (NGN 100,185)",
        }
        break;
        case "Total Orders":
        data={
            icon: <TodayIcon className={classes.Icon} />,
            title:"Total Orders",
            ismoney:"2,567",
            month:"-10% from last month (305 Order)",
        }
        break;
        case "Today's Vistor's":
        data={
            icon: <PermIdentityIcon className={classes.Icon} />,
            title:"Today's Vistor's",
            ismoney:"1,459",
            month:"+22% from yesterday (123 visitors)",
        }
        break;
      default:
        data={
            icon: <GroupIcon className={classes.Icon} />,
            title:"Conversion Rate",
            ismoney:"15%",
            month:"-15% from yesterday(6.5% rate)",
        }
         break;
    }
     return (
      <div className={classes.change}>
        <div className={classes.changetop}>
        <span className={classes.Icons}>{data.icon}</span>
        <div className={classes.title}>
            <p>{data.title}</p>
            <h3>{data.ismoney}</h3>
        </div>
       </div>
        <p className={classes.down}>{data.month}</p>
      </div>
    )
};
export default Change;