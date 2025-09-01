export default function SearchBar({ onSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Cari Nama dan Unit Kerja..."
                onChange={(e) => onSearch(e.target.value)}
                className="form-control form-control-sm mb-3 border rounded p-2 w-full"
            />
        </div>
    );
}