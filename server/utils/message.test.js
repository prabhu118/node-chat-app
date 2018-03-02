var expect                  = require('expect');

var {genMessage}            = require('./message');

describe('genMessage',function(){
    it('test results',function(){
        var from = 'Admin';
        var text = 'hello';
        var message = genMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    })
})