import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarGraph({data:{confirmed,recovered,deaths}}) {
    return (
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
      />
  );
}
