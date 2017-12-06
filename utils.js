/**
 * Copyright 2017 Software Lab, TU Darmstadt, Germany
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 * Created by Cristian-Alexandru Staicu on 29.06.17.
 * Special thanks to the Node Security Team for sharing similar code on their website!
 */
function genstr(len, chr) {
    var result = "";
    for (i = 0; i <= len; i++) {
        result = result + chr;
    }
    return result;
}

function measureTime(f, print) {
    var start = process.hrtime();
    f();
    var end = process.hrtime(start);
    if (print === false) {

    } else {
        console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
    }
    return end;
}

function monkeyPatch() {
    var oldReplace = String.prototype.replace;
    String.prototype.replace = function () {
        var start = process.hrtime();
        var res = oldReplace.apply(this, arguments);
        var end = process.hrtime(start);
        if (this instanceof String) {
            console.info("Execution time (hr): " + end[0] + "s " + (end[1] / 1000000) + "ms");
            console.info(getCallerFile() + " replace " + arguments[0] + " " + limit(this));
        }
        return res;
    };

    var oldMatch = String.prototype.match;
    String.prototype.match = function () {
        var start = process.hrtime();
        var res = oldMatch.apply(this, arguments);
        var end = process.hrtime(start);
        if (this instanceof String) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(getCallerFile() + " match " + arguments[0] + " " + limit(this));
        }
        return res;
    };

    var oldSplit = String.prototype.split;
    String.prototype.split = function () {
        var start = process.hrtime();
        var res = oldSplit.apply(this, arguments);
        var end = process.hrtime(start);
        if (this instanceof String) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(getCallerFile() + " split " + arguments[0] + " " + limit(this));
        }
        return res;
    };

    var oldSearch = String.prototype.search;
    String.prototype.search = function () {
        var start = process.hrtime();
        var res = oldSearch.apply(this, arguments);
        var end = process.hrtime(start);
        if (this instanceof String) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(getCallerFile() + " search " + arguments[0] + " " + limit(this));
        }
        return res;
    };

    var oldExec = RegExp.prototype.exec;
    RegExp.prototype.exec = function () {
        var start = process.hrtime();
        var res = oldExec.apply(this, arguments);
        var end = process.hrtime(start);
        if (console.log) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(getCallerFile() + " exec " + limit(arguments[0]) + " " + this);
        }
        return res
    };

    var oldTest = RegExp.prototype.test;
    RegExp.prototype.test = function () {
        var start = process.hrtime();
        var res = oldTest.apply(this, arguments);
        var end = process.hrtime(start);
        if (console.log) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(getCallerFile() + " test " + limit(arguments[0]) + " " + this);
        }
        return res
    };

    function limit(a) {
        if (a.length && a.length < 50)
            return a;
        return "TOO_LONG";
    }


    function getCallerFile() {
        try {
            var err = new Error();
            var callerfile;
            var currentfile;

            Error.prepareStackTrace = function (err, stack) {
                return stack;
            };

            currentfile = err.stack.shift().getFileName();

            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if (currentfile !== callerfile) return callerfile;
            }
        } catch (err) {
        }
        return undefined;
    }
}

module.exports.genstr = genstr;
module.exports.measureTime = measureTime;
module.exports.monkeyPatch = monkeyPatch;