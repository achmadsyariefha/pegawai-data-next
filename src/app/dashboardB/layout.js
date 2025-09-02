import '../../styles/dashboardB-output.css';

export default function Layout({ children }) {
    return (
        <div className="dashboardB-page">
            <header className="dashboardB-header">Dashboard B Header</header>
            <main className='p-4'>{children}</main>
        </div>
    );
}