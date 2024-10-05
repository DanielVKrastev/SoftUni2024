import { expect } from 'chai';
import { isOddOrEven } from '../even-or-odd.js';
import { describe } from 'mocha';

describe('Test isOddOrEven', function() {
    it('Should return undefined if other than string is passed', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven(['string'])).to.be.undefined;
        expect(isOddOrEven({name: 'daniel'})).to.be.undefined;
    });

    it('Should return even if string with even length is passed', () => {
        expect(isOddOrEven('AB')).to.equal('even');
        expect(isOddOrEven('test')).to.equal('even');
    });

    it('Should return odd if string with odd length is passed', () => {
        expect(isOddOrEven('ABC')).to.equal('odd');
        expect(isOddOrEven('testt')).to.equal('odd');
    });

    it('Should work normally with different strings', () => {
        expect(isOddOrEven('Happy')).to.equal('odd');
        expect(isOddOrEven('Hell')).to.equal('even');
        expect(isOddOrEven('Daniel')).to.equal('even');
    });
})