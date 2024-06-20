"use client";

import React from "react";
import Sidenav from "../components/app/Sidenav";
import { Card, CardHeader, CardBody, User } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
export default function Index() {
  return (
    <div className="flex justify-between h-screen overflow-hidden">
      <div className="w-1/6">
        <Sidenav />
      </div>
      <div className="w-5/6 flex flex-col p-8">
        <h1 className="text-3xl font-bold">Summary</h1>
        <div className="grid grid-cols-3 gap-3 mt-8 w-full">
          <RecapCard title="Total entry" data={10} css={"bg-[#0072f5] text-white font-normal text"} />
          <RecapCard title="Total of entry" data={10} bg={""} />
          <RecapCard title="Total of withdraw" data={10} css={"bg-[#17c964] text-white font-normal text"} />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold my-8">Statistics</h1>
          <DataChart />
        </div>
      </div>
      <div className="w-1/4 p-8">
        <RightSide />
      </div>
    </div>
  );
}

function RecapCard({ title, data, css }: any) {
  return (
    <Card className={css}>
      <CardBody>
        <h1 className="text-4xl">{title}</h1>
        <p className="text-xl">{data}</p>
      </CardBody>
    </Card>
  );
}

function DataChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      }
    },
  };

  return (
    <Card className="">
      <Line
      className="p-8"
      options={options}
      data={{
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Entry",
            data: [65, 59, 80, 81, 56, 55, 40, 30, 20, 10, 5, 10],
            fill: true,
            borderColor: "#17c964",
            backgroundColor: "#17c96420",
            tension: 0.1,
          },
          {
            label: "Withdraw",
            data: [12, 19, 3, 5, 2, 3, 10, 11, 12, 19, 3, 5],
            fill: true,
            borderColor: "#0072f5",
            backgroundColor: "#0072f520",
            tension: 0.1,
          },
        ],
      }}
    />
    </Card>
  );
}

function RightSide() {
  return (
    <div className="flex flex-col-reverse justify-between h-full">
      <Card className="my-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h1 className="font-bold text-large">Latest update</h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div>
            <div className="flex flex-col items-center gap-4">
              <Card isBlurred shadow="lg">
                {" "}
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="my-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h1 className="font-bold text-large">Latest operations</h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div>
            <Card>
              <div className="flex items-center gap-4">
                <User
                  name="Jane Doe"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  }}
                />
                <span>4500 USD</span>
                <span>10/01/2021</span>
              </div>
            </Card>
          </div>
        </CardBody>
        
        
      </Card>
    </div>
  );
}
