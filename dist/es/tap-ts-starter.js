"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
...*/
var DummyClass = /** @class */ (function () {
    function DummyClass() {
    }
    return DummyClass;
}());
exports.default = DummyClass;
console.log('working!'); /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
/**
 *This module is the entry point for local execution as a Singer tap (see the [spec](https://github.com/singer-io/getting-started/blob/master/SPEC.md))
 */
var configLoader = require("./tap-load-config");
var scanDir = require("./scan-dir");
var parseCsv = require("./parse-csv");
/** random note */
/** random note 2
  *
 */
var csvFilePath = 'test.csv';
var csv = require('csv');
configLoader
    .loadConfig()
    .then(function (configObjs) {
    // run scanDir using parseCsv as the parser for each item
    return scanDir.scanDir(configObjs, parseCsv.parseItem);
})
    .catch(function (error) {
    // Handle errors
    console.error('Error: ', error);
    return error;
});
//# sourceMappingURL=tap-ts-starter.js.map