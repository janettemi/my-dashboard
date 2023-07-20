import React from 'react';
import classes from'./Home.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../header/header';
import Widget from '../components/widget/Widget';
import Change from '../components/change/Change';
import Chart from '../components/chart/Chart';
import Feature from '../components/feature/Feature';
import Table from '../components/table/Table';
function Home() {
  return (
    <div className={classes.Home}>
        <Sidebar />
    <div className={classes.homeContainer}> 
        <Header />
    <div className={classes.Widget}>
        <Widget />   
    <div className={classes.Change}>
            <Change type='Total Revenue ' />
            <Change type='Total Orders'/>
            <Change type="Today's Vistor's"/>
            <Change type="Conversion Rate"/>
        </div> 
        <div className={classes.charts}>
            <Chart />
            <Feature />
        </div>
        <div className={classes.listContainer}>
            <div className={classes.listTitle}>Lastest Transactions</div>
            <Table />
        </div>
       </div> 
     </div>
    </div>
  )
}

export default Home