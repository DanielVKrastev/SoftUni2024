import { expect } from "chai";
import { lookupChar } from "../lookup-char.js";

describe('test lookupChar', function() {
    /*
•	Returning undefined
•	Returning an "Incorrect index"
•	Returning the char at the specified index
    */
    it('Should return undefined if invalid argument is passed', () => {
        expect(lookupChar(1,1)).to.be.undefined;
        expect(lookupChar('test', 2.2)).to.be.undefined;
    })

    it('Should return "Incorrect index" if index argument is out of range', () => {
        expect(lookupChar('test', 6)).to.equal('Incorrect index');
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
    })

    it('Should return correct char at given index', () => {
        expect(lookupChar('test', 3)).to.equal('t');
        expect(lookupChar('Daniel', 2)).to.equal('n');
        expect(lookupChar('Anna', 3)).to.equal('a');
    })
});