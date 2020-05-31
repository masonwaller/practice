import React from 'react'
import {Line} from 'react-chartjs-2';

export default function Graph(props) {
    const [chartData, setData] = React.useState({})
    const chart = () => {
        setData({labels: ['monday', 'turesday', 'wednesday'],
            datasets: [{label: 'level of thicccness',
                data: [64, 57, 26],
                backgroundColor: [ 'rgba(74, 9, 75, 35)'],
                borderWidth: 4
            }]
        })
    }
    React.useEffect(() => {
        chart()
    }, [])

    return (
      <div>
        <Line data={chartData}/>
      </div>
    );
  }