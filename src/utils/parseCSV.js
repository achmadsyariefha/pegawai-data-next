import Papa from "papaparse";

export function parseCSV(filePath, callback) {
    fetch(filePath)
    .then(response => response.text())
    .then(csvText => {
        const results = Papa.parse(csvText, {
            download: true,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
        });
        callback(results.data, results.meta.fields);
    })
    .catch(err => {
        console.error("Error fetching or parsing CSV:", err);
        callback([], []);
    });
}