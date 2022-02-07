import { Bar } from "react-chartjs-2";
import useChartJsLegendPlugin from "../hooks/useChartJsLegendPlugin";

const labels = [
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Caterpie",
  "Weedle",
  "Pidgey",
  "Rattata",
];
const defaultData = {
  labels: labels,
  datasets: [
    {
      label: "Attack",
      data: [65, 59, 23, 43, 56, 55, 40],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Speed",
      data: [47, 20, 80, 50, 43, 90, 32],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
    },
    {
      label: "Defense",
      data: [30, 12, 58, 79, 19, 30, 50],
      backgroundColor: "rgba(100, 159, 64, 0.2)",
    },
  ],
};
const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function DemoBar() {
  const { legends, plugin } = useChartJsLegendPlugin();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          position: "relative",
          minHeight: "350px",
          width: "100%",
          overflowX: "scroll",
        }}
      >
        <Bar data={defaultData} options={defaultOptions} plugins={[plugin]} />
      </div>

      <ul style={{ listStyleType: "none", width: "200px" }}>
        {legends.map(({ fillStyle, hidden, text, datasetIndex, onClick }) => {
          const id = `label-${datasetIndex}`;
          return (
            <li key={datasetIndex}>
              <input
                type="checkbox"
                id={id}
                name={text}
                checked={!hidden}
                onChange={onClick}
                style={{
                  accentColor: fillStyle,
                  color: "white",
                }}
              />
              <label htmlFor={id}>{text}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
