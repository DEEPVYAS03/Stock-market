import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Title from "../Template/Title.jsx";
import Axios from "axios";
import config from "../../config/Config";

const Chart = () => {
  const [chartData, setChartData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = config.base_url + `/api/data/random`;
        const response = await Axios.get(url);
        if (response.data.status === "success") {
          const dates = response.data.response.map((item) => item.date);
          const closePrices = response.data.response.map((item) => item.close);

          setChartData({
            labels: dates,
            datasets: [
              {
                label: "Stock Price",
                data: closePrices,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          });
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : chartData && (
        <div style={{ minHeight: "240px" }}>
          <Title>Stock Price Chart</Title>
          <Line
            data={chartData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Chart;