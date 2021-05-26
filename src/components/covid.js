import React, { useEffect } from 'react'


const Covid = () => {
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }       

    }
    useEffect(() => {
        getCovidData();

    }, []);

  return (
    <div>
          <h1>live</h1>
    <h2>Covid-19 Coronavairus Tracker</h2>
    
    </div>
  );
}

export default Covid;
