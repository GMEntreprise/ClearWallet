"use server";
import type { NextApiRequest, NextApiResponse } from "next";
import { Incomes } from "../../../../utils/schema";
import { db } from "../../../../utils/dbConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, amount, createdBy, icon } = req.body;

    try {
      const result = await db.insert(Incomes).values({
        name,
        amount,
        createdBy,
        icon,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error("Insert failed:", error);
      res.status(500).json({ error: "Failed to insert income" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
