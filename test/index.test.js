const { sumTwoSmallestNumbers } = require("./../src/index");

describe('sumTwoSmallestNumbers', () => {
    it('Should return the the number 1 when the array [1, 2, 3, 4] are sended', () => {
        let numbers = [4, 3, 2, 1];
        let result = 1
        expect(sumTwoSmallestNumbers(numbers)).toBe(result);
    })

    it('Should return a array with the numbers [2, 3] when a array [4,3,2,5] are sended', () => {
        let numbers = [4, 3, 2, 5];
        let result = [2, 3]
        expect(sumTwoSmallestNumbers(numbers)).toBe(result);
    });
});