import React from 'react';
import { Bar } from 'react-chartjs-2';
import ReactLoading from "react-loading";

export default function BarGraph({data}) {
    console.log(data);
    let confirmed=data?.confirmed;
    let deaths=data?.deaths;
    let recovered=data?.recovered;
    return (
      (data)?
      <Bar
        data={{
            labels:["Infected","Recovered","Deaths"],
            datasets:[{
                label:'People',
                backgroundColor:[
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)'
                ],
                data:[confirmed,recovered,deaths]
            }]
            
        }}
        options={{
            maintainAspectRatio:false,
            responsive:true,
            layout:{
              padding:30
            },
            plugins:{
              legend:{
                display:false
              }
            }
          }}
      />:
      <ReactLoading
      type="bubbles"
      color="#0038FF"
      height={150}
      width={150}
    />
  );
}
