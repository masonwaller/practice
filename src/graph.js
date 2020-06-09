import React from 'react'
import {Line} from 'react-chartjs-2';

export default function Graph(props) {
    const [chartData, setData] = React.useState({})
    const chart = () => {
        setData({labels: [props.x[0], (props.x[1])? props.x[1]:props.x[0], (props.x[2])? props.x[2]:props.x[0]],
            datasets: [{label: 'Graph',
                data: [props.values[0], (props.values[1])? props.values[1]:props.values[0], (props.values[2])? props.values[2]:props.values[0] ],
                backgroundColor: [ 'rgba(7, 59, 5, 3)'],
                borderWidth: 4
            }]
        })
    }
    React.useEffect(() => {
        chart()
    }, [props.values, props.x])

    return (
      <div>
        <Line data={chartData}/>
      </div>
    );
  }