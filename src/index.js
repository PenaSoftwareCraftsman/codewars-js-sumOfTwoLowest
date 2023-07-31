const sumTwoSmallestNumbers = (numbers) => {
    let result = numbers[0];
    for(let number of numbers) {
        result = number < result ? number : result;
    }

    return result;
}

module.exports = {
    sumTwoSmallestNumbers
}