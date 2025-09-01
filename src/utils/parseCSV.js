import Papa from "papaparse";

export async function parseCSV(filePath, callback) {
    try {
        const response = await fetch(filePath);
        const csvText = await response.text();

        Papa.parse(csvText, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results?.data?.length) {
                    callback(results.data, results.meta.fields);
                } else {
                    console.warn("No data found in CSV.");
                    callback([], []);
                }
            },
            error: function (err) {
                console.error("Error fetching or parsing CSV:", err);
                callback([], []);
            }
        });
    } catch (error) {
        console.error("Error fetching or parsing CSV:", error);
        callback([], []);
    }
}