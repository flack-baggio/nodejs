var util = require('util');

//util.format
console.log('### Testing "util.format" ##########');
var json = {'string': 'Hello World', 'digit': 1};
console.log('### Testing "util.format" ##########');
console.log(util.format('%s : %d : %j', 'Hello World', '2013', json));
console.log(util.format('%s : %d : %j', 'Hello World', 2013));
console.log(util.format('%s : %d : %j', 'Hello World', 2013, json, '余り'));
console.log('###################################\n');

//util.debug
console.log('### Testing "util.debug" ##########');
util.debug('debug message');
console.log('###################################\n');

//util.error
console.log('### Testing "util.error" ##########');
util.error('debug message', 'next', '3', 'fow');
console.log('###################################\n');

//util.puts
console.log('### Testing "util.puts" ##########');
util.puts('debug message2', 'next2', '32', 'fow2');
console.log('###################################\n');

//util.print
console.log('### Testing "util.print" ##########');
util.print('debug message3', true, 33, 'fow3');
console.log('###################################\n');

//util.inspect
console.log('### Testing "util.inspect" ##########');
console.log(util.inspect(util));
console.log(util.inspect(util, {showHidden: true}));
console.log(util.inspect(util, {depth: 5}));
console.log(util.inspect(util, {color: true}));
console.log(util.inspect(util, {customInspect: true}));
console.log('###################################\n');

//util.isArray
console.log('### Testing "util.isArray" ##########');
console.log('[] : ' + util.isArray([]));
console.log('test : ' + util.isArray('test'));
console.log('{} : ' + util.isArray({}));
console.log('new Array : ' + util.isArray(new Array));
console.log('###################################\n');

//util.isRegExp
console.log('### Testing "util.isRegExp" ##########');
console.log('/some regexp/ : ' + util.isRegExp(/some regexp/));
console.log('new RegExp() : ' + util.isRegExp(new RegExp('another regexp')));
console.log('{} : ' + util.isRegExp({}));
console.log('###################################\n');

//util.isDate
console.log('### Testing "util.isDate" ##########');
console.log('new Date() : ' + util.isDate(new Date()));
console.log('{} : ' + util.isDate({}));
console.log('2013-10-10 10:10:10 : ' + util.isDate('2013-10-10 10:10:10'));
console.log('###################################\n');

//util.isError
console.log('### Testing "util.isError" ##########');
console.log('new Error() : ' + util.isError(new Error()));
console.log('new TypeError() : ' + util.isError(new TypeError()));
console.log('{new Date(), new TypeError()} : ' + util.isError({ 'Date' : new Error(), 'TypeError': new TypeError()}));
console.log('###################################\n');
