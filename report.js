const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection: `https://api.postman.com/collections/42431548-374aea81-003c-4b98-a3ad-71bebe146701?access_key=${process.env.secrectKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});