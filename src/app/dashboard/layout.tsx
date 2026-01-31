import DashboardHeader from "@/components/common/DashboardHeader";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import { Suspense } from "react";
import { TbLoader2 } from "react-icons/tb";



export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <DashboardSidebar />
            <div className="flex flex-col flex-1">
                <DashboardHeader />
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
        </div>
    );
}
