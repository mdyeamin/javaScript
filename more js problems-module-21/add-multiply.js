/*
chairWood = 3cft / chire
tableWood = 5cft / table
bedWood = 50cft / bed
*/

function woodCalculator(chairQuntity, tableQuntity, bedQuantity) {
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairWood * chairQuntity;
    const tableWoodQuantity = tableWood * tableQuntity;
    const bedWoodQuantity = bedWood * bedQuantity;
    // adding all wood quantity 
    const totalQuntity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalQuntity;
}

const firstWoodCount = woodCalculator(1, 1, 1);
console.log(firstWoodCount);