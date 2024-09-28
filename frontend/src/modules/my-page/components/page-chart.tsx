import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const customLineColorPlugin = {
  id: 'customLineColorPlugin',
  beforeDraw(chart: any) {
    const { ctx, chartArea } = chart

    ctx.save()
    ctx.fillStyle = '#2E2E2E'
    ctx.fillRect(chartArea.left, chartArea.top, chartArea.width, chartArea.height)
    ctx.restore()
  },
  beforeDatasetDraw(chart: any) {
    chart.data.datasets.forEach((dataset: any, index: any) => {
      const customLineColor = index === 0 ? 'rgba(255, 99, 132, 1)' : 'rgba(54, 162, 235, 1)'
      dataset.borderColor = customLineColor
      dataset.backgroundColor = customLineColor.replace('1)', '0.2)')
    })
  }
}

export default function PageChart() {
  const data = {
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    datasets: [
      {
        label: 'Body Record (Yellow)',
        data: [65, 59, 80, 81, 56, 55, 40, 35, 30, 25, 20, 18],
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21',
        borderWidth: 4,
        pointBackgroundColor: '#FFCC21',
        pointBorderWidth: 2,
        pointRadius: 5
      },
      {
        label: 'Body Record (Blue)',
        data: [50, 45, 60, 60, 48, 46, 35, 30, 28, 22, 18, 16],
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
        borderWidth: 4,
        pointBackgroundColor: '#8FE9D0',
        pointBorderWidth: 2,
        pointRadius: 5
      }
    ]
  }

  const options = {
    scales: {
      x: {
        grid: {
          color: '#777777'
        },
        ticks: {
          color: 'white'
        }
      },
      y: {
        grid: {
          display: false
        },
        beginAtZero: true,
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      },
      background: {
        backgroundColor: '#414141'
      },
      customCanvasBackgroundColor: {
        backgroundColor: '#414141'
      }
    },
    layout: {
      padding: 20
    },
    responsive: true,
    maintainAspectRatio: false
  }

  return (
    <div className=' w-full h-full pl-[54px] pr-[100px] bg-bg_primary'>
      <Line data={data} options={options} plugins={[customLineColorPlugin]} />
    </div>
  )
}
