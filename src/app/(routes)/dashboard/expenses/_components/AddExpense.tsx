import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Loader } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";
import { Budgets, Expenses } from "../../../../../../utils/schema";
import { db } from "../../../../../../utils/dbConfig";

interface AddExpenseProps {
  budgetId: string; // or number, depending on your actual type
  user: string;
  refreshData: () => void;
}

function AddExpense({ budgetId, refreshData }: AddExpenseProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);
  /**
   * Used to Add New Expense
   */
  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD/MM/yyy"),
      })
      .returning({ insertedId: Budgets.id });

    setAmount("");
    setName("");
    if (result) {
      setLoading(false);
      refreshData();
      toast("New Expense Added!");
    }
    setLoading(false);
  };
  return (
    <div className="border p-5 rounded-2xl">
      <h2 className="font-bold text-lg">Ajouter une dépense</h2>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Nom de la dépense</h2>
        <Input
          placeholder="Ex : Décoration de la chambre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Montant de la dépense</h2>
        <Input
          placeholder="Ex : 1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        disabled={!(name && amount) || loading}
        onClick={() => addNewExpense()}
        className="mt-3 w-full rounded-full"
      >
        {loading ? <Loader className="animate-spin" /> : "Ajouter la dépense"}
      </Button>
    </div>
  );
}

export default AddExpense;
