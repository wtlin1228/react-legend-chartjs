import { useState, useMemo } from "react";

export default function useChartJsLegendPlugin() {
  const [legends, setLegends] = useState([]);

  const plugin = useMemo(() => {
    return {
      id: "customized-legend",
      afterUpdate(chart) {
        setLegends(
          chart.options.plugins.legend.labels
            .generateLabels(chart)
            .map(({ fillStyle, hidden, text, datasetIndex }) => ({
              fillStyle,
              hidden,
              text,
              datasetIndex,
              onClick: () => {
                chart.setDatasetVisibility(
                  datasetIndex,
                  !chart.isDatasetVisible(datasetIndex)
                );
                chart.update();
              },
            }))
        );
      },
    };
  }, []);

  return { legends, plugin };
}
