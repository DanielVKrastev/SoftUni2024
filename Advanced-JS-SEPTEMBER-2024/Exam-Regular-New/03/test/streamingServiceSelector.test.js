import { expect } from 'chai';
import { streamingServiceSelector} from '../streamingServiceSelector.js';


describe('streamingServiceSelector', function() {

    describe('selectingContent', function() {
        const supportedGenres = ["Action", "Comedy", "Drama", "Thriller", "Horror", "Romance", "Sci-Fi"];
        it('If the value of genre is not in the list of supported return ERROR', () => {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', 'Test')).to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
            expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', 'Action2')).to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
            expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', 5)).to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
            expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', [])).to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
        });

        it('If the value of type is different from "Movie" or "TV Show", throw an error:', () => {
            expect(() => streamingServiceSelector.selectingContent('Serial', 'HBO', supportedGenres[1])).to.throw("We currently only support 'Movie' or 'TV Show' types.");
            expect(() => streamingServiceSelector.selectingContent('Test', 'HBO', supportedGenres[3])).to.throw("We currently only support 'Movie' or 'TV Show' types.");
            expect(() => streamingServiceSelector.selectingContent(123, 'HBO', supportedGenres[3])).to.throw("We currently only support 'Movie' or 'TV Show' types.");
            expect(() => streamingServiceSelector.selectingContent(['Movie'], 'HBO', supportedGenres[3])).to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });

        it('If all inputs are valid, return the correct message:', () => {
            expect(streamingServiceSelector.selectingContent('Movie', 'HBO', supportedGenres[1])).to.equal(`You can watch this ${supportedGenres[1]} Movie on HBO. Enjoy your ${supportedGenres[1]}-filled experience!`);
            expect(streamingServiceSelector.selectingContent('TV Show', 'Netflix', supportedGenres[2])).to.equal(`You can watch this ${supportedGenres[2]} TV Show on Netflix. Enjoy your ${supportedGenres[2]}-filled experience!`);
            expect(streamingServiceSelector.selectingContent('Movie', 'HBO', supportedGenres[4])).to.equal(`You can watch this ${supportedGenres[4]} Movie on HBO. Enjoy your ${supportedGenres[4]}-filled experience!`);
        });
    });

    describe('availablePlatforms', function() {
        const platforms = ["Netflix", "HBO", "Disney+"];
        it('Validation if passed platform is not an array and if the selectedPlatformIndex is not a number.', () => {
            expect(() => streamingServiceSelector.availablePlatforms('Sedan', 1)).to.throw("Invalid platform selection.");
            expect(() => streamingServiceSelector.availablePlatforms(12, '2')).to.throw("Invalid platform selection.");
            expect(() => streamingServiceSelector.availablePlatforms(platforms, '2')).to.throw("Invalid platform selection.");
            expect(() => streamingServiceSelector.availablePlatforms(platforms, [])).to.throw("Invalid platform selection.");
        });

        it('Validation if the selectedPlatformIndex is outside the limits of the array.', () => {
            expect(() => streamingServiceSelector.availablePlatforms(platforms, -1)).to.throw("Invalid platform selection.");
            expect(() => streamingServiceSelector.availablePlatforms(platforms, 4)).to.throw("Invalid platform selection.");
            expect(() => streamingServiceSelector.availablePlatforms(platforms, 50)).to.throw("Invalid platform selection.");
        });

        it('Should return correct element array after removing.', () => {
            expect(streamingServiceSelector.availablePlatforms(platforms, 0)).to.equal(`Other available platforms are: ${platforms[1]}, ${platforms[2]}.`);
            expect(streamingServiceSelector.availablePlatforms(platforms, 1)).to.equal(`Other available platforms are: ${platforms[0]}, ${platforms[2]}.`);
            expect(streamingServiceSelector.availablePlatforms(platforms, 2)).to.equal(`Other available platforms are: ${platforms[0]}, ${platforms[1]}.`);
        });
    });

    describe('contentRating', function() {
        it('Validation if runtimeInMinutes and viewerRating is not a numbers.', () => {
            expect(() => streamingServiceSelector.contentRating('10', '9')).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating(10, '9')).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating('10', 9)).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating([10], 9)).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating(10, {})).to.throw("Invalid runtime or rating.");
        });
        //  !!!!! 
        it('Validation if runtimeInMinutes is not a positive number and viewerRating is not a number between 0 and 10.', () => {
            expect(() => streamingServiceSelector.contentRating(-10, 10)).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating(0, 10)).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating(0, 0)).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating(0, 11)).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating(-1, 9)).to.throw("Invalid runtime or rating.");
        });

        let runtimeInMinutes = 10;
        let viewerRating = 7;
        let runtimeInHours = (runtimeInMinutes / 60).toFixed(2);

        it('If viewerRating is greater than or equal to 7, return correct message.', () => {
            expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content is highly rated (${viewerRating}/10) and has a runtime of ${runtimeInHours} hours. Enjoy your watch!`);

            runtimeInMinutes = 158;
            viewerRating = 8;
            runtimeInHours = (runtimeInMinutes / 60).toFixed(2);
            expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content is highly rated (${viewerRating}/10) and has a runtime of ${runtimeInHours} hours. Enjoy your watch!`);

            runtimeInMinutes = 264;
            viewerRating = 9;
            runtimeInHours = (runtimeInMinutes / 60).toFixed(2);
            expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content is highly rated (${viewerRating}/10) and has a runtime of ${runtimeInHours} hours. Enjoy your watch!`);
        });

        it('If viewerRating is less than 7, return correct message.', () => {
            runtimeInMinutes = 158;
            viewerRating = 6;
            runtimeInHours = (runtimeInMinutes / 60).toFixed(2);
            expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content has a lower rating (${viewerRating}/10) and runs for ${runtimeInHours} hours. You might want to check reviews first.`);

            runtimeInMinutes = 158;
            viewerRating = 5;
            runtimeInHours = (runtimeInMinutes / 60).toFixed(2);
            expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content has a lower rating (${viewerRating}/10) and runs for ${runtimeInHours} hours. You might want to check reviews first.`);

            runtimeInMinutes = 264;
            viewerRating = 1;
            runtimeInHours = (runtimeInMinutes / 60).toFixed(2);
            expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content has a lower rating (${viewerRating}/10) and runs for ${runtimeInHours} hours. You might want to check reviews first.`);
        });
    });
});