import { useEffect, useState } from "react"

const useChart = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(()=> {
        fetch('chart.json')
        .then( res => res.json())
        .then( data => setChartData(data));
    },[])
    return [chartData, setChartData];
}

export default useChart;