import DashboardHeader from "@/components/common/DashboardHeader";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import { ReactNode, Suspense } from "react";
import { TbLoader2 } from "react-icons/tb";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main className="py-6">
      <DashboardSidebar />
        <DashboardHeader />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Suspense
                    fallback={
                        <div className="flex justify-center py-12">
                            <TbLoader2 className="h-8 w-8 animate-spin text-blue-500" />
                        </div>
                    }
                >
                    {children}
                </Suspense>
            </div>
        </main>
    )
}