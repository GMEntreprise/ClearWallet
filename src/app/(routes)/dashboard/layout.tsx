"use client";
import React, { ReactNode, useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";

import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { Budgets } from "../../../../utils/schema";
import { db } from "../../../../utils/dbConfig";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      checkUserBudgets();
    }
  }, [user]);

  const checkUserBudgets = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) return;

    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, email));
    console.log(result);
    if (result?.length == 0) {
      router.replace("/dashboard/budgets");
    }
  };
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <SideNav />
      </div>
      <div className="md:ml-64 ">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
