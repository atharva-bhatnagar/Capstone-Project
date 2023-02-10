import React from 'react'

import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Barchart=()=>{ 
 return (
    <div className='bar-chart'>
        <Bar data={{
            labels:['oe','ie','re','a','b','c','d'],
            datasets:[
                {
                    label:'user count',
                    data:[10,3,14,20,34,24,11],
                },
                {
                    label:'user count',
                    data:[1,13,4,2,13,20,10],
                }
            ],
            
        }}
        options={
            {
                maintainAspectRatio:false,
            }
        }
        height={2000}
        width={3000}/>
    </div>
  )
}
export default Barchart