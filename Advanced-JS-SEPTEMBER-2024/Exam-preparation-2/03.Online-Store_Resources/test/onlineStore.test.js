import { expect } from 'chai';
import { onlineStore} from '../onlineStore.js';

describe('onlineStore', function() {

    describe('isProductAvailable', function() {
        it('Should throw an error with invalid input types.', () => {

            expect(() => onlineStore.isProductAvailable(0, 0)).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable('123', '123')).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable(1, '123')).to.throw('Invalid input.');
        });

        it('Should return an error message when stockQuantity is 0 or less.', () => {
            const product = 'Pears';
            expect(onlineStore.isProductAvailable(product, 0)).to.equal(`Sorry, ${product} is currently out of stock.`);
            expect(onlineStore.isProductAvailable(product, -1)).to.equal(`Sorry, ${product} is currently out of stock.`);

        });

        it('Should return success message when strockQuantitu is more than 0.', () => {
            const product = 'Pears';
            expect(onlineStore.isProductAvailable(product, 1)).to.equal(`Great! ${product} is available for purchase.`);
            expect(onlineStore.isProductAvailable(product, 3)).to.equal(`Great! ${product} is available for purchase.`);
        });

    });

    describe('canAffordProduct', function() {
        it('Should throw an error with invalid input types.', () => {
            expect(() => onlineStore.canAffordProduct('0', 0)).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct(0, '123')).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct('123', '123')).to.throw('Invalid input.');
        });

        it('Should return insufficient found if account ballance is less than product price', () => {
            expect(onlineStore.canAffordProduct(20, 10)).to.equal("You don't have sufficient funds to buy this product.");
            expect(onlineStore.canAffordProduct(11, 10)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it('Should return success if account balance is larger than the product price', () => {
            expect(onlineStore.canAffordProduct(10, 20)).to.equal(`Product purchased. Your remaining balance is $10.`);
            expect(onlineStore.canAffordProduct(10, 10)).to.equal(`Product purchased. Your remaining balance is $0.`);
        });
    });

    describe('getRecommendedProducts', function() {

        it('Should throw an error with invalid input types.', () => {
            expect(() => onlineStore.getRecommendedProducts(0, '1')).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts([1,2,3], 2)).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts(1, 1)).to.throw('Invalid input.');
        })

        it('Should return no recommended products if there arent any category', () => {
            const products = [
                {
                    name: 'Apple', category: 'Fruits'
                },
                {
                    name: 'Pear', category: 'Fruits'
                },
                {
                    name: 'Tomato', category: 'Fruits'
                }
            ];

            const category = 'Vegatables';
            expect(onlineStore.getRecommendedProducts(products, category)).to.equal(`Sorry, we currently have no recommended products in the ${category} category.`);
        });

        it('Should return no recommended products if there any category', () => {
            const products = [
                {
                    name: 'Apple', category: 'Fruits'
                },
                {
                    name: 'Pear', category: 'Fruits'
                },
                {
                    name: 'Tomato', category: 'Fruits'
                }
            ];

            const category = 'Fruits';
            expect(onlineStore.getRecommendedProducts(products, category)).to.equal(`Recommended products in the ${category} category: ${products.map(entry => entry.name).join(', ')}`);
        });
    });

});