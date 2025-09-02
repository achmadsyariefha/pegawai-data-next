import '../../styles/dashboardA-output.css';

export default function Layout({ children }) {
    return (
    <div className="dashboardA-page">
        <header className="dashboardA-header">Dashboard A Header</header>
        <main className='p-4'>{children}</main>
    </div>
);
}