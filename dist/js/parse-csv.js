"use strict";
/** convert-csv-to-json === csv to json parser (https://www.npmjs.com/package/convert-csv-to-json)*/
Object.defineProperty(exports, "__esModule", { value: true });
var csv = require('convert-csv-to-json');
var fs = require('fs');
let csvFile = '../testdata/csv/test.csv';
let jsonOutput = '../testdata/csv/output.json';
function parseItem(test) {
    return new Promise(function (resolve, reject) {
        csv(test, function (err, result) {
            if (result != null) {
                /*let rec = new tapTypes.streamRecord()
                        rec.stream = 'csv'
                        rec.time_extracted = new Date()
                        rec.record = result
        
                        resolve(rec)*/
                csv.fieldDelimiter(',').getJsonFromCsv(csvFile);
                csv.generateJsonFileFromCsv(csvFile, jsonOutput);
            }
            else {
                reject(Error('Danger Will Robertson! Something went wrong.'));
            }
        });
    });
}
exports.parseItem = parseItem;
/* drop in promise */
//# sourceMappingURL=parse-csv.js.map