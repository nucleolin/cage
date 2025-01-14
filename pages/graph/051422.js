import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    }
  },
  scales: {
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#2A303F'
      },
      title: {
        display: true,
        text: 'Square meter(m²)'
      }
    },
    y2: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'right',
      ticks: {
        color: '#CB554D'
      },
      title: {
        display: true,
        text: 'Property Price/Annual Income'
      },
      grid: {
        drawOnChartArea: false // only want the grid lines for one axis to show up
      }
    }
  }
}

const labels = ['Singapore', 'Taiwan', 'Netherlands', 'Japan', 'Germany', 'USA']

export const data = {
  labels,
  datasets: [
    {
      label: 'Construction Land Size Per Capita(m²)',
      data: [91.75, 160.57, 373.01, 423.79, 599.11, 1355.40],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#2A303F',
      yAxisID: 'y'
    },
    {
      label: 'Property Price to Income Ratio',
      data: [17.49, 21.81, 7.15, 11.02, 8.93, 3.96],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#CB554D',
      yAxisID: 'y2'
    }
  ]
}

function GRAPH () {
  return (
  <div className="my-auto chart-wrapper bg-white">
    <Bar options={options} data={data} height={500}/>
  </div>
  )
}

export default GRAPH
