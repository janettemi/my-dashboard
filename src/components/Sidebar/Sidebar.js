 import React from "react";
 import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
 import classes from './Sidebar.module.css';
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import ContentCopyIcon from '@mui/icons-material/ContentCopy';
 import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
 import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
 import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
 import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
 import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
 import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
 import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from "react-router";
 //import { Link } from "react-router-dom";
 const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.sidebar}>
            <div className={classes.top}>
                <div className={classes.chart}>
                    <ShoppingCartOutlinedIcon className={classes.charts} />
                 </div>
                <div className={classes.bases}>
                <h2>EasyShop</h2>
                <p>Marketplace Storefront</p>
                </div>
            </div>
            <hr></hr>
            <div className={classes.center}>
                <ul className={classes.centers}>
                    <li className={classes.dash}>
                        <DashboardIcon className={classes.icons}/>
                        <span className={classes.context}>Dashborad</span>
                    </li>
                    <li>
                        <ContentCopyIcon className={classes.icon} />
                        <span>Order</span>
                    </li>
                    <li>
                        <PeopleAltIcon className={classes.icon}/>
                        <span>Customers</span>
                    </li>
                    <li>
                        <CreditScoreOutlinedIcon className={classes.icon} />
                        <span>Products</span>
                    </li>
                    <li>
                        <EventRepeatOutlinedIcon className={classes.icon} />
                        <span>Report</span>
                        </li>
                    <li>
                        <EmailOutlinedIcon className={classes.icon}/>
                        <span>Message</span>
                    </li>
                    <li>
                        <InfoOutlinedIcon className={classes.icon}/>
                        <span>Help Center</span>
                    </li>
                    <div className={classes.down}>
                    <li>
                        <SettingsSuggestOutlinedIcon className={classes.icon} />
                        <span>Setting</span>
                    </li>
                
                    <li className={classes.click} onClick={() => {
                        localStorage.clear()
                    }}>
                        <LogoutOutlinedIcon className={classes.icon}/>
                        <span>Logout</span>
                    </li>
                    </div>
                </ul>
            </div>
        </div>
    )
 }


 export default Sidebar;