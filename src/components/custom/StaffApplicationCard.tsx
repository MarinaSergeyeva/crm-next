"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { browser: "Pending", visitors: 80, fill: "var(--color-pending)" },
  { browser: "Approved", visitors: 370, fill: "var(--color-approved)" },
  { browser: "Rejected", visitors: 50, fill: "var(--color-rejected)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  pending: {
    label: "Pending",
    color: "hsl(30, 100%, 60%)",
  },
  approved: {
    label: "Approved",
    color: "hsl(140, 60%, 50%)",
  },
  rejected: {
    label: "Rejected",
    color: "hsl(0, 100%, 60%)",
  },
} satisfies ChartConfig;

export function StaffApplicationCard() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="flex items-center h-3/4">
      <div className="flex flex-col justify-between w-1/2 py-8">
        <p className="text-base font-bold mb-6">500 Total Applications</p>
        <p className="mb-4 flex items-center before:content-[''] before:w-1 before:h-4 before:bg-orange-400 before:mr-2 before:inline-block before:rounded before:rounded-xs">
          <span className="font-bold">80 </span>Pending
        </p>
        <p className="mb-4 flex items-center before:content-[''] before:w-1 before:h-4 before:bg-green-400 before:mr-2 before:inline-block before:rounded before:rounded-xs">
          <span className="font-bold">370 </span>Approved
        </p>
        <p className="mb-4 flex items-center before:content-[''] before:w-1 before:h-4 before:bg-red-400 before:mr-2 before:inline-block before:rounded before:rounded-xs">
          <span className="font-bold">50 </span>Rejected
        </p>
      </div>
      <Card className="flex flex-col border-none shadow-none w-1/2">
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle">
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold">
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground">
                            Applications
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
