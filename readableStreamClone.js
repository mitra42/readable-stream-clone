var util = require("util");
var Readable = require('stream').Readable;

var ReadableStream = function(readableStream, options) {
    var me = this;
    Readable.call(me, options);

    readableStream.on("data", function(chunk) {
        me.push(chunk);
    });

    readableStream.on('end', function() {
        me.push(null);
    });

    readableStream.on("error", function(err) {
        me.emit("error", err);
    });
    me._read = function() {
    };
};

util.inherits(ReadableStream, Readable);

module.exports = ReadableStream;
