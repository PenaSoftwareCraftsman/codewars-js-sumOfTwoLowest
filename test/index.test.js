const { sumTwoSmallestNumbers } = require("./../src/index");

describe('sumTwoSmallestNumbers', () => {
    it('Should return the the number 1 when the array [1, 2, 3, 4] are sended', () => {
        let numbers = [4, 3, 2, 1];
        let result = 1
        expect(sumTwoSmallestNumbers(numbers)).toBe(result);
    })
});