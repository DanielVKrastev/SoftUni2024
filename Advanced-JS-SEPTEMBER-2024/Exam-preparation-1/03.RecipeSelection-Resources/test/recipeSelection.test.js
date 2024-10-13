import { expect } from 'chai';
import { recipeSelection } from '../recipeSelection.js';

describe('Recipe Selection', function() {
    describe('isTypeSuitable', function() {
        it('Outputs vegeterian restrictions', () =>{
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
        });

        it('Outputs vegan restrictions', () =>{
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans");
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        });

        it('Allows any other combination', () => {
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegetarian')).to.equal( "This recipe is suitable for your dietary restriction");
            expect(recipeSelection.isTypeSuitable('Celery', 'Vegan')).to.equal( "This recipe is suitable for your dietary restriction");
            expect(recipeSelection.isTypeSuitable('Salo', 'Keto')).to.equal( "This recipe is suitable for your dietary restriction");
        });

        it('Validates input parameters', () => {
            expect(() => recipeSelection.isTypeSuitable(1, 'Vegan')).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable('Meat', 12)).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable('Vegan', [])).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable({}, [1,2,3])).to.throw("Invalid input");
        })
    });

    describe('isItAffordable ', function() {
        it('Prints affordable message', () => {
            expect(recipeSelection.isItAffordable(1, 10)).to.equal(`Recipe ingredients bought. You have 9$ left`);
        });

        it('Prints to expensive message', () => {
            expect(recipeSelection.isItAffordable(2, 1)).to.equal("You don't have enough budget to afford this recipe");
            expect(recipeSelection.isItAffordable(12, -10)).to.equal("You don't have enough budget to afford this recipe");
        });

        it('Prints to affordable message with zero leftover', () => {
            expect(recipeSelection.isItAffordable(1, 1)).to.equal(`Recipe ingredients bought. You have 0$ left`);
        });

        it('Validates input parameters', () => {
            expect(() => recipeSelection.isItAffordable(1, '1')).to.throw();
            expect(() => recipeSelection.isItAffordable('12', 12)).to.throw();
        })
    });

    describe('getRecipesByCategory', function() {
        it('Filters recipes', () => {
            const input = [{title: 'Tofu', category: 'Asian'}, {title: 'Trout', category: 'Seafood'}];
            const result = recipeSelection.getRecipesByCategory(input, 'Seafood');

            expect(result.length).to.equal(1);
            expect(result).to.contain('Trout');
        });

        it('Works with empty input', () => {
            const input = [];
            const result = recipeSelection.getRecipesByCategory(input, 'Seafood');

            expect(result.length).to.equal(0);
        });

        it('Return empty array with nothing matches', () => {
            const input = [{title: 'Tofu', category: 'Asian'}, {title: 'Trout', category: 'Seafood'}];
            const result = recipeSelection.getRecipesByCategory(input, 'Keto');

            expect(result.length).to.equal(0);
        });

        it('Validates input parameters', () => {
            expect(() => recipeSelection.getRecipesByCategory([], 2)).to.throw('Invalid input');
            expect(() => recipeSelection.getRecipesByCategory('test', 'a')).to.throw('Invalid input');
        });
    });
});