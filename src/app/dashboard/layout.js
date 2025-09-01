export default function DashboardLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <aside className="w-64 bg-gray-100 p-4">Sidebar</aside>
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}