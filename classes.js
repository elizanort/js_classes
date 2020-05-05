//Plant
class Plant {
    constructor(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountofSunNeeded) {
      this.type = type;
      this.isPerennial = isPerennial;
      this.leafDescription = leafDescription;
      this.leafColor = leafColor;
      this.flowerColor = flowerColor;
      this.flowerDescription = flowerDescription;
      this.gallonsWaterPerWeek = gallonsWaterPerWeek;
    }
   
    describe = () => {
        let description = `A ${this.type} has ${this.leafDescription}. It's flowers ${this.flowerDescription} and are typically ${this.flowerColor}.`

        return description;
    }


    changeColor = () => {
        let newColors = ["Amber", "Crimson", "Aqua", "Cerulean Blue", "Flamingo", "Gun Smoke", "Jade", "Merigold", "Mustard", "Periwinkle"];
        // ~~ Magic Genetic Engineering ~~
        let randIndex = Math.floor(Math.random() * newColors.length);
        if (this.isFlawed) {
            this.flowerDescription = "wilted sad buds with no pedals.";
            this.flowerColor = null;
        } else {
            this.flowerColor = newColors[randIndex];
        }
        let randomChance = Math.floor(Math.random() * 3);
        if (randomChance < 1) {
            this.isFlawed = true;
        }
    }

    clone = () => {
        let clone = {};
        let plantItems = Object.keys(this.plant);
    
        for(let plantInfo of plantItems){
            clone[plantInfo] = plant[plantInfo];
        }
    
    changeColorOfPlant(clone);
    return clone;
    }
  }

//Garden
class Garden{
    constructor(name) {
        this.name = name;
        this.plants = [];
    }

    describe = () =>{
        let description = `${this.name} has ${this.plants.length} types of plants in it. It contains:`;

        for (let plant of listOfPlants){
        description += "\n" + describePlant(plant)
        }
 
    return description;
    }
    
    addPlant = () =>{
        this.name.push(this.plants);
    }
}

//Estate
class Estate{
    constructor(garden){
        this.roseArbor = new Garden("Rose Arbor");
        this.perenialGarden = new Garden("Perennial Garden");
        this.slopePlanters = new Garden("Slope Planters");
    }

    addPlant = () => {
        if(this.type === "rose"){
            this.roseArbor.push(plant());
        
        } else if (this.isPerennial === true && this.amountOfSunNeeded <= 5){
            this.perennialGarden.push(plant());
        
        } else {
            this.slopePlanters.push(plant());
        } 
    
        return garden.addPlant(plant());
    }

    describe = () => {
        const estateLength = Object.keys(estate).length;
        let description = `The estate has ${estateLength} gardens.`;
        for (let gardenName in estate){
            let listofPlants = estate[gardenName];
            description += "\n" + describeGarden(gardenName, listofPlants);
        }
    
        return description
    }

    calculateWaterUsagePerWeek = () => {
        let numGallons = 0;
        for (let gardenName in estate){
            let garden = estate[gardenName];
            for (let plant of garden){
                numGallons += plant.gallonsWaterPerWeek;
            }
        }
    let newNumGallons = Math.floor(numGallons);
    return newNumGallons;
    }

    cloneAllTheRosesAndChangeTheirColors = () => {
        let clonedRoses = [];
        let estatePlants = Object.keys(estate)
        
        for (let i = 0; i < Object.keys(estate).length; i++){
            let gardenName = Object.values(estate[i]);
    
            for(let flower in gardenName){
    
                let plant = gardenName[flower];
                if (plant.type === "rose" && plant.isFlawed !== true){
                    clonedRoses.push(cloneRose(plant()))
                }   
            }
        
    
            for (let flower in clonedRoses){
                gardenName.push(clonedRoses[flower]);
    
            }
        }
    }
}

/*
-------TESTS---------------------------------------------------------------
Run these commands to make sure you did it right. They should all be true.
*/
// {
//  console.log("-----Tests for Exercise One-----");

//  {
//      let plantProperties = getAllTestPlants()[0];
//      console.log("* Get a rose");
//      let plant1 = createPlant(...plantProperties); // this is called a "spread" operator, it takes every value in the array and passes each into the function as a parameter

//      let hasEveryProperty = true;
//      if (plant1) {
//          let values1 = Object.values(plant1);
//          for (let property of plantProperties) {
//              if (!values1.includes(property)) {
//                  hasEveryProperty = false;
//                  console.log(`ERROR - The plant is missing a value: ${property}`);
//              }
//          }
//      }

//      console.log(plant1 && hasEveryProperty);
//  }


//  console.log("-----Tests for Exercise Two-----");
//  {
//      let plants2 = getAllTestPlants();
//      let estate2 = createEstate();

//      console.log("* Add a rose");
//      let rose2 = createPlant(...plants2[0]);
//      addPlantToEstate(estate2, rose2);
//      console.log(estate2.roseArbor.length === 1 && estate2.perennialGarden.length === 0 && estate2.slopePlanters.length === 0 && estate2.roseArbor[0] === rose2);

//      console.log("* Add another rose");
//      addPlantToEstate(estate2, rose2);
//      console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 0 && estate2.slopePlanters.length === 0 && estate2.roseArbor[1] === rose2);

//      console.log("* Add a perrenial");
//      let orchid2 = createPlant(...plants2[1]);
//      addPlantToEstate(estate2, orchid2);
//      console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 0 && estate2.perennialGarden[0] === orchid2);

//      console.log("* Add a high sun perrenial");
//      let lavender2 = createPlant(...plants2[3]);
//      addPlantToEstate(estate2, lavender2);
//      console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 1 && estate2.slopePlanters[0] === lavender2);

//      console.log("* Add a non-perrenial");
//      let marigold2 = createPlant(...plants2[7]);
//      addPlantToEstate(estate2, marigold2);
//      console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 2 && estate2.slopePlanters[1] === marigold2);
//  }


//  console.log("-----Tests for Exercise Three-----");
//  {
//      let estate3 = createdPopulatedEstate();
//      console.log("* describePlant works and includes the flower color");
//      let plantDescription3 = describePlant(estate3.roseArbor[0]);
//      console.log(plantDescription3);
//      console.log(plantDescription3 && plantDescription3.length > 0 && plantDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1);

//      console.log("* describeGarden works and includes the flower color");
//      let gardenDescription3 = describeGarden("Rose Arbor", estate3.roseArbor);
//      console.log(gardenDescription3);
//      console.log(gardenDescription3 && gardenDescription3.length > 0 && gardenDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1);

//      console.log("* describeEstate works");
//      let estateDescription3 = describeEstate(estate3);
//      console.log(estateDescription3);
//      console.log(estateDescription3 && estateDescription3.length > 0 && estateDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1);
//  }
//  console.log("-----Tests for Exercise Four-----");
//  {
//      let estate4 = createEstate();
//      console.log("* Empty Estate");
//      let emptyGallons = calculateWaterUsagePerWeek(estate4);
//      console.log(emptyGallons === 0);

//      console.log("* Calculate Whole Estate is equal to 12.");
//      estate4 = createdPopulatedEstate();
//      let totalGallons = calculateWaterUsagePerWeek(estate4);
//      console.log(totalGallons === 12);

//  }
//  console.log("-----Tests for Exercise Five-----");
//  {
//      let estate5 = createdPopulatedEstate();

//      console.log("* Clone Rose");
//      let rose5 = estate5.roseArbor[0];
//      let rose5Copy = cloneRose(rose5);
//      console.log(!!rose5Copy && !!rose5Copy.type &&
//          rose5Copy.type === rose5.type &&
//          rose5Copy.isPerennial === rose5.isPerennial &&
//          rose5Copy.leafDescription === rose5.leafDescription &&
//          rose5Copy.leafColor === rose5.leafColor &&
//          rose5Copy.flowerDescription === rose5.flowerDescription &&
//          rose5Copy.gallonsWaterPerWeek === rose5.gallonsWaterPerWeek &&
//          rose5Copy.amountOfSunNeeded === rose5.amountOfSunNeeded);


//      console.log("* Clone All Roses - First Run");
//      let initialNumRoses = estate5.roseArbor.length;
//      cloneAllTheRosesAndChangeTheirColors(estate5);
//      console.log(estate5.roseArbor.length > 0 && estate5.roseArbor.length === (initialNumRoses * 2));

//      console.log("* Clone All Roses - After a few runs... - No flawed roses.");
//      cloneAllTheRosesAndChangeTheirColors(estate5);
//      cloneAllTheRosesAndChangeTheirColors(estate5);
//      cloneAllTheRosesAndChangeTheirColors(estate5);
//      let hasNoRuinedRoses = true;
//      for (let rose of estate5.roseArbor) {
//          if (rose.flowerColor == null) {
//              hasNoRuinedRoses = false;
//          }
//      }
//      console.log(estate5.roseArbor.length > 0 && estate5.roseArbor.length > initialNumRoses && hasNoRuinedRoses);
//  }

//  /*
//     -------TEST UTILITIES------------------------------------------------------
//     These are utilities for the tests.
 
//     Do not modify anything below this line.
 
//     But read through these and try to understand what they  do.
//  */

//  function createdPopulatedEstate() {
//      let estate = createEstate();
//      let plants = getAllTestPlants();

//      for (let plant of plants) {
//          let plantObj = createPlant(...plant);
//          addPlantToEstate(estate, plantObj);
//      }

//      return estate;
//  }

//  function getAllTestPlants() {
//      return [
//          ["rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4],
//          ["orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2],
//          ["lily", true, "small and rounded", "green", "pink, white, blue, or orange", "brightly colored pedals surrounding a lighter center", 2, 4],
//          ["lavender", true, "long and skinny", "green", "purple", "fragrant rod-like clusters of many tiny pedals", 2.5, 8],
//          ["poppy", true, "long and jagged at the base of the plant", "green", "orange or red", "concentric circles of ruffled pedals surrounding a central core", 0.8, 4],
//          ["begonia", false, "large with jagged edges and visible veins", "purple and green", "pink", "a few gently ruffled pedals with a central cluster of yellow pistils", 1.8, 5],
//          ["snapdragon", false, "long and skinny along the entire stem", "green", "red, yellow, or orange", "many groups of ruffled pedals all along the stem", 0.5, 4],
//          ["marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4],
//          ["rose", true, "rounded with a point", "green", "purple", "concentric circles of pedals", 0.8, 4],
//          ["rose", true, "rounded with a point", "green", "blue", "concentric circles of pedals", 0.8, 4]
//      ]
//  }
// }

let myEstate = new Estate();
 
let firstPlant = new Plant("rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4);
myEstate.addPlant(firstPlant);
 
let secondPlant = new Plant("orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2);
myEstate.addPlant(secondPlant);
 
let thirdPlant = new Plant("marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4);
myEstate.addPlant(thirdPlant);
 
myEstate.describe(); // This should print the whole description of the estate.
 
myEstate.calculateWaterUsagePerWeek(); // This should print 2.8
 
myEstate.cloneAllTheRosesAndChangeTheirColors(); // This should clone the rose and make a second one.
console.log(myEstate.roseArbor.plants.length == 2);
 