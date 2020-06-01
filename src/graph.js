import React from 'react'
import {Line} from 'react-chartjs-2';

export default function Graph(props) {
    const [chartData, setData] = React.useState({})
    const chart = () => {
        setData({labels: ['0', '1', '2'],
            datasets: [{label: 'Graph',
                data: [props.values[0], (props.values[1])? props.values[1]:props.values[0], (props.values[2])? props.values[2]:props.values[0] ],
                backgroundColor: [ 'rgba(7, 59, 5, 3)'],
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