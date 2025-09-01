export function filterData(data, query, fields) {
    if (!query) return data;
    const lowerQuery = query.toLowerCase();
    return data.filter(row =>
        fields.some(field =>
            row[field]?.toString().toLowerCase().includes(lowerQuery)
        )
    );
}