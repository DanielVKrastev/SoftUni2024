import { expect } from 'chai';
import { chooseYourCar} from '../chooseYourCar.js';

describe('chooseYourCar', function() {

    describe('choosingType', function() {
        it('If the year is less than 1900 and the year is more than 2022, throw an error.', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1899)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw("Invalid Year!");
        });

        it('If the value of the string type is different from "Sedan", throw an error.', () => {
            expect(() => chooseYourCar.choosingType('Combi', 'red', 2020)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType('Cabrio', 'red', 2020)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType('Limusine', 'red', 2020)).to.throw("This type of car is not what you are looking for.");
        });

        it('If the year of the car is greater or equal to 2010, return correct message', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal("This red Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType('Sedan', 'red', 2019)).to.equal("This red Sedan meets the requirements, that you have.");
        });

        it('If the year of the car is less than 2010, return correct message', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal("This Sedan is too old for you, especially with that red color.");
            expect(chooseYourCar.choosingType('Sedan', 'red', 1999)).to.equal("This Sedan is too old for you, especially with that red color.");
            expect(chooseYourCar.choosingType('Sedan', 'red', 1959)).to.equal("This Sedan is too old for you, especially with that red color.");
        });
    });

    describe('brandName', function() {
        it('If passed brands parametars is not an array and index is not a number.', () => {
            expect(() => chooseYourCar.brandName('brands', '2')).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(['brands'], '1')).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName({}, 1)).to.throw("Invalid Information!");
        });

        it('If index is outside the limits of the array.', () => {
            expect(() => chooseYourCar.brandName(['test'], 2)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(['test'], -1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(['test', 'test2'], 3)).to.throw("Invalid Information!");
        });

        it('Return array brands after removing', () => {
            const arr = ["BMW", "Toyota", "Peugeot", "Audi"];
            expect(chooseYourCar.brandName(arr, 0)).to.equal("Toyota, Peugeot, Audi");
            expect(chooseYourCar.brandName(arr, 1)).to.equal("BMW, Peugeot, Audi");
            expect(chooseYourCar.brandName(arr, 2)).to.equal("BMW, Toyota, Audi");
            expect(chooseYourCar.brandName(arr, 3)).to.equal("BMW, Toyota, Peugeot");

        });
    });

    describe('CarFuelConsumption', function() {
        it('If the distanceInKilometers and consumptedFuelInLitres are not numbers, or are negative numbers, throw an error', () => {
            expect(() => chooseYourCar.carFuelConsumption('3', '2')).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption('3', 2)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(3, '2')).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption([3], '2')).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-2, -1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption (2, -1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-2, 1)).to.throw("Invalid Information!");
        });

        it('If the liters/100km is less or equal to 7L. return correct message.', () => {

            let consumptedFuelInLiters = 60;
            let distanceInKilometers = 1000;

            let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);

             consumptedFuelInLiters = 70;
             distanceInKilometers = 1000;

             litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);

            consumptedFuelInLiters = 80;
            distanceInKilometers = 1521;

            litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
           expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);

        });

        it('If the liters/100km is more to 7L. return correct message.', () => {

            let consumptedFuelInLiters = 90;
            let distanceInKilometers = 1000;

            let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.equal(`The car burns too much fuel - ${litersPerHundredKm} liters!`);

             consumptedFuelInLiters = 121;
             distanceInKilometers = 1251;

             litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.equal(`The car burns too much fuel - ${litersPerHundredKm} liters!`);

            consumptedFuelInLiters = 161;
            distanceInKilometers = 1521;

            litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
           expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.equal(`The car burns too much fuel - ${litersPerHundredKm} liters!`);

        });
    });
});