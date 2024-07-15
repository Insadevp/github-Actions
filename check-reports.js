const fs = require('fs');
const path = require('path');

const reportDir = path.join(__dirname, 'cypress/reports');
const files = fs.readdirSync(reportDir).filter(file => file.endsWith('.json'));

if (files.length === 0) {
    console.error('No JSON files found in cypress/reports. Skipping report generation.');
    process.exit(1); // Exit with an error code to prevent further commands
}
