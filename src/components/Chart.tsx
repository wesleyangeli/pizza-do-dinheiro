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
        conhecimento: "Conhecimento",
        investimentos: "Investimentos",
        poupanca: "Poupança",
        consumo: "Consumo",
        mentalidade: "Mentalidade",
        patrimonio: "Patrimônio",
        aposentadoria: "Aposentadoria",
        estadoAtual: "Estado Atual",
      };

      const labelsArray = Object.keys(dataSource);
      const titlesArray = labelsArray.map((label) => titles[label]);
      const valuesArray = Object.values(dataSource);

      const context = chartRef.current.getContext("2d");
      const newChart = new Chart(context, {
        type: "polarArea",
        data: {
          // labels: titlesArray,
          datasets: [
            {
              label: "Níveis",
              data: valuesArray,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            r: {
              angleLines: {
                display: false,
              },
              suggestedMin: 0, // Valor mínimo do eixo
              suggestedMax: 10, // Valor máximo do eixo
              ticks: {
                stepSize: 1, // Incremento do eixo
                // beginAtZero: true,
              },
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
