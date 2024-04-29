"use client";
import dynamic from "next/dynamic";
import { FC } from "react";
// import Chart from "react-apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
      enabled: true,
      formatter: function (val: number) {
        return val.toFixed(0) + "%";
      },

      style: {
        fontSize: "12px",
        fontFamily: "Poppins",
      },
    },
    chart: {
      id: id,
      width: 300,
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

    legend: {
      show: true,
      fontSize: "12px",
      fontFamily: "Poppins",
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height ?? 300}
      width={"100%"}
      className={className}
    />
  );
};
