const data = [
    { name: '=cmd|\' /C calc\'!A0', email: 'test@example.com' },
    { name: '+1-1', email: 'hello' }
];

const sanitizeCSVCell = (value) => {
    if (value === null || value === undefined) return '';
    let strValue = String(value);
    // Prevent CSV injection by prefixing formula characters with a single quote
    if (/^[=+\-@\t\r]/.test(strValue)) {
        strValue = "'" + strValue;
    }
    return JSON.stringify(strValue);
};

const headers = Object.keys(data[0]);
const csv = [
    headers.join(','),
    ...data.map(row =>
        headers.map(header =>
            sanitizeCSVCell(row[header])
        ).join(',')
    )
].join('\n');

console.log(csv);
