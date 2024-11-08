import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BudgetItem {
  name: string;
  totalSpend: number;
  amount: number;
}

function BarChartDashboard({ budgetList }: { budgetList: BudgetItem[] }) {
  return (
    <div className="border rounded-2xl p-5">
      <h2 className="font-bold text-lg">Activité</h2>
      <ResponsiveContainer width={"80%"} height={300}>
        <BarChart
          data={budgetList}
          margin={{
            top: 7,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalSpend"
            stackId="a"
            fill="#4845d2"
            name="dépensesTotales"
          />
          <Bar dataKey="amount" stackId="a" fill="#C3C2FF" name="montant" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;
