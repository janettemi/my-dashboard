import React from 'react';
import classes from './Chart.module.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = () => {
    const data = [
        {
          name: 'Jan',
          uv: 39,
        },
        {
          name: 'Feb',
          uv: 47,
        },
        {
          name: 'Mar',
          uv: 23,
        },
        {
          name: 'Apl',
          uv:36 ,
        },
        {
          name: 'May',
          uv: 48,
        },
        {
          name: 'Jun',
          uv: 38,
        },
        {
          name: 'Jul',
          uv: 33,
        },
        {
            name: 'Aug',
            uv: 38,
          },
          {
            name: 'Sep',
            uv: 29,
          },
          {
            name: 'Oct',
            uv: 30,
          },
          {
            name: 'Nov',
            uv: 25,
          },
          {
            name: 'Dec',
            uv: 42,
           
          },
      ];
    return(
        <div className={classes.Charts}>
          <div className={classes.title}>Sale Activity<span className={classes.title2}>13%</span></div>
           <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer></div>
    )
};
export default Chart;