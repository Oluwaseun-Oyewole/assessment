/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import Chart from "react-apexcharts";

type Props = {
  id: string | "bar-chart";
  series: any | undefined;
  type?: "bar" | any;
  className?: string;
  dropShadowColor?: string;
  strokeColor?: Array<string>;
  height?: number | string;
  width?: number | string;
  xaxisLabel?: boolean;
  stacked?: boolean;
  plotOptions?: boolean;
  showGrid?: boolean;
  label: Array<string>;
};

export const ChartComponent: FC<Props> = ({
  type,
  id,
  series,
  className,
  height,
  label,
}) => {
  const options = {
    dataLabels: {
      enabled: false,
      formatter: function (val: string | number) {
        return val + "%";
      },
    },
    chart: {
      id: id,
      width: 200,
    },
    labels: label,

    fill: {
      type: "gradient",
      colors: [
        "rgba(4, 165, 200, 1)",
        "rgba(4, 102, 200, 1)",
        "rgba(3, 138, 57, 1)",
        "rgba(200, 145, 4, 1)",
        "rgba(90, 4, 200, 1)",
        "rgba(200, 4, 98, 1)",
      ],
    },
    aspectRatio: 0.2,
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height ?? 300}
      className={className}
    />
  );
};
