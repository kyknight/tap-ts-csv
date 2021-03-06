/**
<<<<<<< HEAD
 * A "scanner" scans a resource collection, parsing the items it finds using the parser passed in  (see the [spec](https://github.com/singer-io/getting-started/blob/master/SPEC.md))
=======
 * A "scanner" scans a resource collection, parsing the items it finds using the parser passed in
 * (see the [spec](https://github.com/singer-io/getting-started/blob/master/docs/SPEC.md#singer-specification))
>>>>>>> 3cb98bb97ac99d0e2d2a299c63c32e788f5f29d6
 *
 * In this case, we are scanning a directory and parsing the files inside.
 */ /** this is a dummy single-line comment needed for documentation build; a hack for https://github.com/TypeStrong/typedoc/issues/603 */

/** fs-extra is a promise-enabled superset of the standard fs package */
import * as fse from 'fs-extra'
import * as tapTypes from './tap-types'
var csv = require('convert-csv-to-json')
var fs = require('fs')

/** generate json-schemas for our records, if needed */
var generateSchema = require('generate-schema') // typescript types aren't available so we load javascript-style instead of using typescript's import

/**
 * Scan a folder, running parser on each file it finds
 * - TODO: implement configObjs.state and configObjs.catalog, which are just stubs for now
 * - TODO: use interfaces instead of "any" here
 * @param configObjs
 * @param parser
 */
export async function scanDir(configObjs: tapTypes.allConfigs, parser: any) {
  let config = configObjs.config
  // future config options
  // let state = configObjs.state
  // let catalog = configObjs.catalog

  // TODO: allow schema(s) to be passed in in config
  let schema: any = null

//<<<<<<< HEAD
  return fse
    .readdir(config.target_folder)
    .then(function(filelist:any) {
      return Promise.all(
        // return an array of promises, one per filename, for Promise.all to run asynchronously
        filelist.map(function(filename:any, idx:any) {
          return fse.readFile(config.target_folder + '/' + filelist[idx]).then(function(buffer) {
            // the parsing is done here
            return parser(buffer)
          })
        })
      )
//=======
  let filelist: string[] = await fse.readdir(config.target_folder as string)
  let parsedObjs = await Promise.all(
    // return an array of promises, one per filename, for Promise.all to run asynchronously
    filelist.map(async function(filename:any, idx:any) {
      let buffer = await fse.readFile(config.target_folder + '/' + filelist[idx])
      return parser(buffer) // the parsing is done here
//>>>>>>> 3cb98bb97ac99d0e2d2a299c63c32e788f5f29d6
    })
  )
  let parsing = (parsedObjs: any) => {
    if (parsedObjs.length == 0) return null

    let schm = new tapTypes.streamSchema()

    // if no schema exists, create a schema based on the first new object
    if (!schm.schema) schm.schema = generateSchema.json(parsedObjs[0].record)
    schm.stream = parsedObjs[0].stream

    // write the schema
    console.log(JSON.stringify(schm))

    // write the objects
    parsedObjs.forEach(function(parsedObj: any, idx: any) {
      console.log(JSON.stringify(parsedObj))
    })
    // TODO: write STATE record
  }
  return parsing(parsedObjs)
}
