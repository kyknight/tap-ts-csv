"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
...*/
class DummyClass {
}
exports.default = DummyClass;
console.log('System is doing its thing!'); /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
/*This module is the entry point for local execution as a Singer tap (see the [spec](https://github.com/singer-io/getting-started/blob/master/SPEC.md))
 */
const configLoader = require("./tap-load-config");
const scanDir = require("./scan-dir");
const parseCsv = require("./parse-csv");
/** random note */
/** random note 2 */
var globalClass = () => __awaiter(this, void 0, void 0, function* () {
    try {
        var configObjs = yield configLoader.loadConfig();
        // run scanDir using parseCsv as the parser for each item
        return scanDir.scanDir(configObjs, parseCsv.parseItem);
    }
    catch (_a) {
        var error = (error) => {
            // Handle errors
            console.error('Error: ', error);
            return error;
        };
    }
});
globalClass();
/*configLoader
  .loadConfig()
  .then(function(configObjs) {
    // run scanDir using parseCsv as the parser for each item
    return scanDir.scanDir(configObjs, parseCsv.parseItem)
  })
  .catch(function(error: any) {
    // Handle errors
    console.error('Error: ', error)
    return error
  })*/
//# sourceMappingURL=tap-ts-starter.js.map