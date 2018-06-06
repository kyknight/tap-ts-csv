"use strict";
/** Types from Singer spec
 * https://github.com/singer-io/getting-started/blob/master/SPEC.md
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
Object.defineProperty(exports, "__esModule", { value: true });
/** SCHEMA messages describe the datatypes of data in the stream
 * https://github.com/singer-io/getting-started/blob/master/SPEC.md#schema */
class streamSchema {
    constructor() {
        this.type = 'SCHEMA';
    }
}
exports.streamSchema = streamSchema;
/** RECORD messages contain the data from the data stream.
 * https://github.com/singer-io/getting-started/blob/master/SPEC.md#record */
class streamRecord {
    constructor() {
        this.type = 'RECORD';
    }
}
exports.streamRecord = streamRecord;
/** STATE messages contain the state that the Tap wishes to persist.
 * https://github.com/singer-io/getting-started/blob/master/SPEC.md#state-1 */
class streamState {
    constructor() {
        this.type = 'STATE';
    }
}
exports.streamState = streamState;
//# sourceMappingURL=tap-types.js.map