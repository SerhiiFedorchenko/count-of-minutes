let {dataParse, diff} = require('../count-of-minutes')
let expect = require('chai').expect

describe('HOW MANY MINUTES', function () {
    it('beginning and end in the morning of one day', function () {
        expect(diff('10:10 am', '11:30 am')).eql(80)
    });
    it('beginning and end in the evening of one day', function () {
        expect(diff('6:10 pm', '9:30 pm')).eql(200)
    });
    it('start in the morning, finish in the evening of one day', function () {
        expect(diff('10:10 am', '6:30 pm')).eql(500)
    });
    it('start in the evening of one day, finish in the morning of the next day', function () {
        expect(diff('1:10 pm', '10:30 am')).eql(1280)
    });
    it('start in the morning of one day, finish in the morning of the next day', function () {
        expect(diff('10:10 am', '9:30 am')).eql(1400)
    });
    it('start in the evening of one day, finish in the evening of the next day', function () {
        expect(diff('1:10 pm', '1:05 pm')).eql(1435)
    });
});