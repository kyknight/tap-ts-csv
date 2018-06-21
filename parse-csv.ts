/** convert-csv-to-json === csv to json parser (https://www.npmjs.com/package/convert-csv-to-json)*/

import * as tapTypes from './tap-types'
var csv = require('convert-csv-to-json')
var fs = require('fs')

let csvFile = '../testdata/email/test.csv'
let jsonOutput = '../testdata/email/output.json'

export function parseItem(test: Buffer) {
  return new Promise(function(resolve, reject) {
    csv(test, function(err: any, result: any) {
      if (result != null) {
        csv.fieldDelimiter(',').getJsonFromCsv(csvFile)
        csv.generateJsonFileFromCsv(csvFile, jsonOutput)
      } else {
        reject(Error('Danger Will Robertson! Something went wrong.'))
      }
    })
  })
}

/* drop in promise */
