const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const CelciusToFahrenhiet = (celcius) => {
    return (celcius * 9) / 5 + 32
}

// module.exports = getRandomNumber; // ---> single export

module.exports = {
    getRandomNumber,
    CelciusToFahrenhiet
}