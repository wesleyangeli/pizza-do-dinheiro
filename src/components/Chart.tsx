import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

interface FormData {
  dataSource: {
    comportamento: number;
    planejamento: number;
    conhecimento: number;
    investimentos: number;
    poupanca: number;
    consumo: number;
    mentalidade: number;
    patrimonio: number;
    aposentadoria: number;
    estadoAtual: number;
  };
}

export const PolarAreaChart = ({ dataSource }: FormData) => {
  const chartRef = useRef<any>(null);
  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const titles: any = {
        comportamento: "Comportamento",
        planejamento: "Planejamento",
        conhecimento: "conhecimento",
        investimentos: "Investimentos",
        poupanca: "Poupança",
        consumo: "Consumo",
        mentalidade: "Mentalidade",
        patrimonio: "Patrimônio",
        aposentadoria: "Aposentadoria",
        estadoAtual: "Estado atual",
      };

      const labelsArray = Object.keys(dataSource);
      const titlesArray = labelsArray.map((label) => titles[label]);
      const valuesArray = Object.values(dataSource);

      const context = chartRef.current.getContext("2d");
      const newChart = new Chart(context, {
        type: "polarArea",
        data: {
          // labels: labelsArray,
          datasets: [
            {
              data: valuesArray,
              borderWidth: 1,
            },
          ],
        },
        options: {
          parsing: {
            xAxisKey: "Questao",
            yAxiskey: "nota",
          },
          scales: {
            r: {
              angleLines: {
                display: false,
              },
              ticks: {},
              pointLabels: {
                font: {
                  size: 14,
                },
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context: any) {
                  const label = titlesArray[context.dataIndex];
                  const value = valuesArray[context.dataIndex];
                  return `${label}: ${value}`;
                },
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  });

  return <canvas ref={chartRef} />;
};
