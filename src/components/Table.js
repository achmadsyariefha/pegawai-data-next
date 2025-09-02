import React, { useState, useEffect } from "react";
import '../styles/Table.css';
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { filterData } from "../utils/filterData";
import { paginate } from "../utils/paginate";
import { parseCSV } from "../utils/parseCSV";

const rowsPerPage = 10;
const searchableColumns = ['Nama Pegawai', 'Unit Kerja'];

const Table = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [headers, setHeaders] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        parseCSV("/data/pegawai_db.csv", (parsedData, fields) => {
            setData(parsedData);
            setFilteredData(parsedData);
            setHeaders(fields);
        });
    }, []);

    useEffect(() => {
        const results = filterData(data, searchQuery, searchableColumns);
        setFilteredData(results);
        setCurrentPage(1); // Reset to first page on new search
    }, [searchQuery, data]);

    const paginatedData = paginate(filteredData, currentPage, rowsPerPage);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    return (
        <div>
            <SearchBar query={searchQuery} onSearch={setSearchQuery} />
            <div className="table-responsive table-container">
                <table className="table table-bordered table-hover">
                    <thead className="table-light">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, colIndex) => (
                                    <td key={colIndex}>{row[header] || <span className="text-muted">-</span>}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Table;