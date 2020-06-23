"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.TokenSchema = new Schema({
    token: String,
    userid: Number,
});
module.exports = mongoose.model('Token', exports.TokenSchema);
//# sourceMappingURL=notificacion-push.schema.js.map