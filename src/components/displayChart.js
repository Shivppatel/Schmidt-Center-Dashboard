import { useEffect, useRef } from "react";
import { useState } from "react";
import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { render } from "react-dom";

var thingspeakHandler = require('./dataHandler');

const labels = [];
const pm_1_atms = [];
const temperatures = [];
const humidities = [];
const aqis = [];
const pm_2_5_atms = [];
const pm_10_atms = [];
const aqi_descriptions = [];

export async function chartData(sensorids, startdate, enddate){

    console.log("received id:"+ sensorids)
    const data = await thingspeakHandler.getThingspeakProcessedData([sensorids], startdate, enddate);
    console.log('DATA: ', data);
    data.forEach(element => {
        console.log("Feed of:" + element.sensor_ID + "Feeds:" + element.feeds);

        element.feeds.forEach(feed => {
            labels.push(feed.created_at);
            temperatures.push(feed.Temperature);
            humidities.push(feed.Humidity);
            aqis.push(feed.AQI);
            pm_2_5_atms.push(feed.PM25ATM);
            pm_10_atms.push(feed.PM100ATM);
            pm_1_atms.push(feed.PM10ATM);
            aqi_descriptions.push(feed.AQIDescription);
        });

        console.log("Temperatures:" + temperatures)
        
    });
    
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Temperature',
      data: temperatures, //labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'AQI',
      data: aqis, //labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Test() {
   return <Line options={options} data={data} />;
}



export function ShowChart(sensorids, startdate, enddate){
    
    console.log("Here we are");

    const [error, setError] = useState(null);   
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        const getdata = async () => {

            try {
                await chartData(sensorids, startdate, enddate);
                setIsLoaded(true);
            }
            catch(err) {
                setError(true);
            }
        };

        getdata();

    });

    if (error) {

        return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {

        return <div>Loading...</div>;

    } else {

        return (
            <div>
                <Line options={options} data={data} />
            </div>
        );

    }

}