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
    ctx.fillStyle = '#414141'
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

export default function BodyChart() {
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
    <div className='w-full h-[304px] flex flex-col bg-[#414141] py-4 px-6 text-white items-center'>
      <div className='flex items-start w-full'>
        <div className='flex flex-col items-start w-[96px] text-balance uppercase font-inter'>
          <span>Body</span>
          <span>Record</span>
        </div>
        <span className='text-[22px] leading-[27px] font-inter'>2021.05.21</span>
      </div>
      <div className='px-5 w-full h-[210px]'>
        <Line data={data} options={options} plugins={[customLineColorPlugin]} />
      </div>
      <div className='flex gap-4 w-full items-center justify-start pl-2'>
        <span className='text-[15px] inline-block h-6 w-[54px] bg-white text-primary-300 rounded-full text-center font-medium'>
          日
        </span>
        <span className='text-[15px] inline-block h-6 w-[54px] bg-white text-primary-300 rounded-full text-center font-medium'>
          週
        </span>
        <span className='text-[15px] inline-block h-6 w-[54px] bg-white text-primary-300 rounded-full text-center font-medium'>
          月
        </span>
        <span className='text-[15px] inline-block h-6 w-[54px] bg-white text-primary-300 rounded-full text-center font-medium'>
          年
        </span>
      </div>
    </div>
  )
}
