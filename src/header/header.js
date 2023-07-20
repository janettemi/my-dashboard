import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import classes from './header.module.css'
const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.wapper}>
                <div className={classes.search}>
                    <SearchIcon/>
                    <input type='text' placeholder='Seaching...' className='search-input' />
                </div>
                <div className={classes.items}>
                   <span className={classes.item2}><NotificationsActiveOutlinedIcon  /></span>
                   <hr className={classes.item3}/>
                    <div>
                    <img
                    src='https://thumbs.dreamstime.com/z/portrait-adorable-young-happy-boy-27903659.jpg' alt='image of a boy'
                    className={classes.avater}
                    /> 
                   </div>
                   <div className={classes.item5}>
                   <h3>Akintan Itenoluwakiishi</h3>
                   <p>Store Owner</p></div> 
                </div>
            </div>
        </div>
    )
}

export default Header;