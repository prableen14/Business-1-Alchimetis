const parseCsvToJson = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error("No file provided"));
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            const text = event.target.result;
            const lines = text.split('\n');
            const headers = lines[0].split(',');
            const jsonArray = [];

            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',');
                if (values.length !== headers.length) {
                    reject(new Error("CSV format is not consistent."));
                    return;
                }

                const entry = {};
                for (let j = 0; j < headers.length; j++) {
                    entry[headers[j]] = values[j];
                }
                jsonArray.push(entry);
            }

            resolve(jsonArray);
        };

        reader.readAsText(file);
    });
};

export { parseCsvToJson };
