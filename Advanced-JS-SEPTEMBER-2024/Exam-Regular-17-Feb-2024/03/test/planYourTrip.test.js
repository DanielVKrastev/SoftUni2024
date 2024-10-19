import { expect } from 'chai';
import { planYourTrip } from '../planYourTrip.js';

describe('Plan Trip', function() {
    describe('choosingDestination ', function() {
        it('If year is different than 2024 throw an error', () =>{
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Summer', 2023)).to.throw("Invalid Year!");
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Summer', 2003)).to.throw("Invalid Year!");
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Summer', 2025)).to.throw("Invalid Year!");
        });

        it('If destination is different from Ski Resort throw an error', () =>{
            expect(() => planYourTrip.choosingDestination('Sea', 'Winter', 2024)).to.throw("This destination is not what you are looking for.");
            expect(() => planYourTrip.choosingDestination('Test', 'Winter', 2024)).to.throw("This destination is not what you are looking for.");
        });

        it('If season is Winter return correct message', () =>{
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it('If season is not a Winter return correct message', () =>{
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
    });

    describe('exploreOptions  ', function() {
        it('Validates input parameters', () => {
            expect(() => planYourTrip.exploreOptions([], '')).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions({}, 1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions([], -1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(['Test', 'Test2', 'Test3'], 3)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(['Test', 'Test2', 'Test3'], 4)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(1, [])).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(1, 1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(['Test', 'Test2', 'Test3'], -1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw("Invalid Information!");
        });

        it('Return correct changed array', function() {
            const arr = ["Skiing", "Snowboarding", "Winter Hiking"];
            expect(planYourTrip.exploreOptions(arr, 2)).to.equal('Skiing, Snowboarding');
            expect(planYourTrip.exploreOptions(arr, 1)).to.equal('Skiing, Winter Hiking');
            expect(planYourTrip.exploreOptions(arr, 0)).to.equal('Snowboarding, Winter Hiking');
        });
    });

    describe('estimateExpenses', function() {
        it('Validates input parameters', () => {
            expect(() => planYourTrip.estimateExpenses('string', '')).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(1, 'string')).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses('2', 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses([2], 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses([2], {})).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, 1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(1, 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(-1, 4)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(1, -4)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(-1, -4)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses('2', -10)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, '-10')).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, 10)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(10, 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(-1, 10)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(10, -1)).to.throw("Invalid Information!");
        });

        it('If cost of the travel is less to $500', function() {
            expect(planYourTrip.estimateExpenses(25, 10)).to.equal(`The trip is budget-friendly, estimated cost is $250.00.`);
            expect(planYourTrip.estimateExpenses(2.5, 1)).to.equal(`The trip is budget-friendly, estimated cost is $2.50.`);
            expect(planYourTrip.estimateExpenses(11, 11.1001)).to.equal(`The trip is budget-friendly, estimated cost is $122.10.`);
            expect(planYourTrip.estimateExpenses(3.3333, 1)).to.equal('The trip is budget-friendly, estimated cost is $3.33.');
            expect(planYourTrip.estimateExpenses(0.01, 1)).to.equal('The trip is budget-friendly, estimated cost is $0.01.');
            expect(planYourTrip.estimateExpenses(1.25, 1.25)).to.equal('The trip is budget-friendly, estimated cost is $1.56.');
            expect(planYourTrip.estimateExpenses(1.22225, 1.2123315)).to.equal('The trip is budget-friendly, estimated cost is $1.48.');
            expect(planYourTrip.estimateExpenses(3.3333, 1)).to.equal('The trip is budget-friendly, estimated cost is $3.33.');
        });

        it('If cost of the travel is equal to $500', function() {
            expect(planYourTrip.estimateExpenses(25, 20)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
            expect(planYourTrip.estimateExpenses(100, 5)).to.equal('The trip is budget-friendly, estimated cost is $500.00.');
        });

        it('If cost of the travel is more than $500', function() {
            expect(planYourTrip.estimateExpenses(10, 80)).to.equal("The estimated cost for the trip is $800.00, plan accordingly.");
            expect(planYourTrip.estimateExpenses(25, 25)).to.equal("The estimated cost for the trip is $625.00, plan accordingly.");
            expect(planYourTrip.estimateExpenses(25, 25.111)).to.equal("The estimated cost for the trip is $627.77, plan accordingly.");
            expect(planYourTrip.estimateExpenses(10000, 5)).to.equal('The estimated cost for the trip is $50000.00, plan accordingly.');
            expect(planYourTrip.estimateExpenses(10000.5, 5.5)).to.equal('The estimated cost for the trip is $55002.75, plan accordingly.');
            expect(planYourTrip.estimateExpenses(123.51223, 135.51231231)).to.equal('The estimated cost for the trip is $16737.43, plan accordingly.');
            expect(planYourTrip.estimateExpenses(1000000000, 1000000)).to.equal('The estimated cost for the trip is $1000000000000000.00, plan accordingly.');
            expect(planYourTrip.estimateExpenses(10, 50.5555)).to.equal('The estimated cost for the trip is $505.56, plan accordingly.');
        });
    });
});