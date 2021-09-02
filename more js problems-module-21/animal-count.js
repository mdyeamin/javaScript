function animalCount(miles) {
    const animalDencityFirst10Miles = 10;
    const animalDencitySecund10Miles = 50;
    const animalDencityrestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDencityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstdenseAnimals = 10 * animalDencityFirst10Miles;
        const restMiles = miles - 10;
        const secunddenseAnimals = restMiles * animalDencitySecund10Miles;
        const totalAnimals = firstdenseAnimals + secunddenseAnimals;
        return totalAnimals;
    }

}
console.log(animalCount(20))