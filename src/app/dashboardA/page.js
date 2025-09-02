'use client';

import Table from "@/components/Table";

export default function Page() {
    return (
        <div className="dashboard-content">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                <div className="dashboardA-card">Card A1</div>
                <div className="dashboardA-card">Card A2</div>
                <div className="dashboardA-card">Card A3</div>
            </div>
            <Table />
        </div>
    );
}