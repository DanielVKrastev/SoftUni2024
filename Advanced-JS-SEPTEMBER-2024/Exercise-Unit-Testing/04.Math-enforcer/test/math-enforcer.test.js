import { expect } from 'chai';
import { mathEnforcer } from '../math-enforcer.js';

describe('Test mathEnforcer', function() {
    describe('addFive', function () {
        it('Should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.addFive('hi')).to.be.undefined;
            expect(mathEnforcer.addFive()).to.be.undefined;
            expect(mathEnforcer.addFive([1,2,3])).to.be.undefined;
            expect(mathEnforcer.addFive({name: 'Daniel'}, ['hi'])).to.be.undefined;
        })

        it('Should return correct result', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(12)).to.equal(17);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(-6)).to.equal(-1);
            expect(mathEnforcer.addFive(1.5)).to.closeTo(6.5, 0.01);
        })
    })

    describe('substractTen', function () {
        it('Should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.subtractTen('hi')).to.be.undefined;
            expect(mathEnforcer.subtractTen()).to.be.undefined;
            expect(mathEnforcer.subtractTen([1,2,3])).to.be.undefined;
            expect(mathEnforcer.subtractTen({name: 'Daniel'})).to.be.undefined;
        })

        it('Should return correct result', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(10.5)).to.closeTo(0.5, 0.01);
        })
    })

    describe('sum', function () {
        it('Should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.sum('hi')).to.be.undefined;
            expect(mathEnforcer.sum('hi', 4)).to.be.undefined;
            expect(mathEnforcer.sum('hi', 'hello')).to.be.undefined;
            expect(mathEnforcer.sum(1, [1,2,3])).to.be.undefined;
            expect(mathEnforcer.sum({name: 'Daniel'})).to.be.undefined;
            expect(mathEnforcer.sum()).to.be.undefined;
        })

        it('Should return correct result', () => {
            expect(mathEnforcer.sum(10, 10)).to.equal(20);
            expect(mathEnforcer.sum(-10, 5)).to.equal(-5);
            expect(mathEnforcer.sum(-10, 10)).to.equal(0);
            expect(mathEnforcer.sum(10.2, 12.3)).to.closeTo(22.5, 0.01);
        })
    })
});