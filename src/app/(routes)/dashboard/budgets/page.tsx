import React from "react";
import BudgetList from "./_components/BudgetsList";

function Budget() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">Mes Budgets</h2>
      <BudgetList />
    </div>
  );
}

export default Budget;
