import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const Piechart = () => {
  return (
    <div className='pie-chart'>
        <Doughnut
        data={
            {
                datasets:[{
                    data:[10,30,20],
                }],
                labels:['one','two','three']
            }
            
        }
        
        />
    </div>
  )
}
export default Piechart
