import { expect } from 'chai';
import { workforceManagement} from '../workforceManagement.js';

describe('workforceManagement', function() {

    describe('recruitStaff', function() {
        it('If the value of the string role is different from "Developer", throw an error.', () => {
            expect(() => workforceManagement.recruitStaff('Daniel', 'Test', 4)).to.throw(`We are not currently hiring for this role.`);
            expect(() => workforceManagement.recruitStaff('Daniel', 'Test2', 5)).to.throw(`We are not currently hiring for this role.`);
        });

        it('If the experience is greater than or equal to 4, return correct message', () => {
            const name = 'Daniel';
            const role = 'Developer';

            let experience = 4;
            expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(`${name} has been successfully recruited for the role of ${role}.`);

            experience = 5;
            expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(`${name} has been successfully recruited for the role of ${role}.`);

            experience = 12;
            expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(`${name} has been successfully recruited for the role of ${role}.`);
        });

        it('If the above conditions are not met, return the correct message', () => {
            const name = 'Daniel';
            const role = 'Developer';

            let experience = 3;
            expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(`${name} is not suitable for this role.`);

            experience = 0;
            expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(`${name} is not suitable for this role.`);
        });
    });

    describe('computeWages', function() {
        it('Should throw an error with invalid input types.', () => {
           expect(() => workforceManagement.computeWages('1')).to.throw('Invalid hours');
           expect(() => workforceManagement.computeWages([1])).to.throw('Invalid hours');
           expect(() => workforceManagement.computeWages({})).to.throw('Invalid hours');
           expect(() => workforceManagement.computeWages(-1)).to.throw('Invalid hours');
        });

        it('If the employee has been working less of 160 hours', () => {
            const perHour = 18;
            let hour = 159;
            let salary = hour * perHour;
            expect(workforceManagement.computeWages(hour)).to.equal(salary);

            hour = 15;
            salary = hour * perHour;
            expect(workforceManagement.computeWages(hour)).to.equal(salary);

            hour = 160;
            salary = hour * perHour;
            expect(workforceManagement.computeWages(hour)).to.equal(salary);
        });

        it('If the employee has been working more than 160 hours', () => {
            const perHour = 18;
            let hour = 161;
            let salary = hour * perHour + 1500;
            expect(workforceManagement.computeWages(hour)).to.equal(salary);

            hour = 165;
            salary = hour * perHour + 1500;
            expect(workforceManagement.computeWages(hour)).to.equal(salary);

            hour = 172;
            salary = hour * perHour + 1500;
            expect(workforceManagement.computeWages(hour)).to.equal(salary);
        });
    });  

    describe('dismissEmployee', function() {
        it('Should throw an error with invalid input types.', () => {
            expect(() => workforceManagement.dismissEmployee(0, 2)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee("[test]", 2)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee({}, 2)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(['test'], 2)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee([], 0)).to.throw("Invalid input");
        });

        it('Return array after remove index', () => {
            const arr = ["Petar", "Ivan", "George"];
            expect(workforceManagement.dismissEmployee(arr, 0)).to.equal("Ivan, George");
            expect(workforceManagement.dismissEmployee(arr, 1)).to.equal("Petar, George");
            expect(workforceManagement.dismissEmployee(arr, 2)).to.equal("Petar, Ivan");
        });
    });
});