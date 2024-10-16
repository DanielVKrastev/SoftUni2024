import { expect } from 'chai';
import { foodDelivery} from '../foodDelivery.js';

describe('artGallery', function() {

    describe('getCategory', function() {
        it('Should throw an error with invalid input types.', () => {
            expect(() => foodDelivery.getCategory(0)).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory(['Vegan'])).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory('Test')).to.throw('Invalid Category!');
        });

        it('Should Vegan.', () => {
            expect(foodDelivery.getCategory('Vegan')).to.equal("Dishes that contain no animal products.");
        });

        it('Should Vegetarian.', () => {
            expect(foodDelivery.getCategory('Vegetarian')).to.equal("Dishes that contain no meat or fish.");
        });

        it('Should Gluten-Free.', () => {
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal("Dishes that contain no gluten.");
        });

        it('Should all categories.', () => {
            expect(foodDelivery.getCategory('All')).to.equal("All available dishes.");
        });
    
    });

    describe('addMenuItem', function() {
        it('Should throw an error with invalid input types.', () => {
            expect(() => foodDelivery.addMenuItem(0, [])).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem(['Apple'], '123')).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem(['Apple'], 3)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([], 6)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem(['Apple'], -6)).to.throw('Invalid Information!');
        });

        it('Should if match items in available menu.', () => {
            const items = [{name: 'Apple', price: 7},{name: 'Orange', price: 6}];
            expect(foodDelivery.addMenuItem(items, 6)).to.equal(`There are 1 available menu items matching your criteria!`);
            expect(foodDelivery.addMenuItem(items, 7)).to.equal(`There are 2 available menu items matching your criteria!`);
            expect(foodDelivery.addMenuItem(items, 5)).to.equal(`There are 0 available menu items matching your criteria!`);
        });
    });

    describe('calculateOrderCost', function() {
        it('Should throw an error with invalid input types.', () => {
            expect(() => foodDelivery.calculateOrderCost([], [], 1)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(1, [], false)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], {}, true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], [], [])).to.throw('Invalid Information!');
        });

        it('If discount is TRUE', () => {
            const shipping = ['standard'];
            const shipping2 = ['express'];
            const addons = ['sauce', 'beverage'];
            expect(foodDelivery.calculateOrderCost(shipping, addons, true)).to.equal(`You spend $6.38 for shipping and addons with a 15% discount!`);
            expect(foodDelivery.calculateOrderCost(shipping2, addons, true)).to.equal(`You spend $8.07 for shipping and addons with a 15% discount!`);
        });

        it('If discount is FALSE', () => {
            const shipping = ['standard'];
            const shipping2 = ['express'];
            const addons = ['sauce', 'beverage'];
            expect(foodDelivery.calculateOrderCost(shipping, addons, false)).to.equal(`You spend $7.50 for shipping and addons!`);
            expect(foodDelivery.calculateOrderCost(shipping2, addons, false)).to.equal(`You spend $9.50 for shipping and addons!`);
        });


    });
});
