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
        let clone = new Plant();
        for(let propreties in this){
            clone[propreties] = this[propreties];
        }

    clone.changeColor();
    return clone;
    }
  }

//Garden
class Garden{
    constructor(name) {
        this.name = name;
        this.plants = [];
    }

    describe(){
        let description = `${this.name} has ${this.plants.length} types of plants in it. It contains:`;
        for (let plant of this.plants){
        description += "\n" + plant.describe()
        }
        return description;
    }
    
    addPlant(plant){
        this.plants.push(plant);
    }
}

//Estate
class Estate{
    constructor(){
        this.roseArbor = new Garden("Rose Arbor");
        this.perenialGarden = new Garden("Perennial Garden");
        this.slopePlanters = new Garden("Slope Planters");
    }

    addPlant(plant){
        if(plant.type === "rose"){
            this.roseArbor.plants.push(plant);
        } else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) { 
            this.perennialGarden.plants.push(plant);
        } else {
            this.slopePlanters.plants.push(plant);
        } 
    }

    describe(){
        const estateLength = this.length;
        let description = `The estate has ${estateLength} gardens.`;
        for (let gardenName in this){
            let garden = this[gardenName];
            description += "\n" + garden.describe;
        }
    
        return description
    }

    calculateWaterUsagePerWeek (){
        let numGallons = 0;
        for (let gardenName in this){
            for (let plant of this[gardenName].plants){
                numGallons += plant.gallonsWaterPerWeek * 10;
            }
        }
    return numGallons / 10;
    }

    cloneAllTheRosesAndChangeTheirColors () {
        let clonedRoses = [];
    
        for (let gardenName in this){
            for (let plant of this [gardenName].plants){
                if (plant.type === "rose" && plant.isFlawed !== true){
                    clonedRoses.push(plant.clone());
                }   
            }
            for (let flower in clonedRoses){
                this[gardenName].plants.push(clonedRoses[flower]);
            }
        }
    }
}



let myEstate = new Estate();
 
let firstPlant = new Plant("rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4);
myEstate.addPlant(firstPlant);
 
let secondPlant = new Plant("orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2);
myEstate.addPlant(secondPlant);
 
let thirdPlant = new Plant("marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4);
myEstate.addPlant(thirdPlant);
 
myEstate.describe(); // This should print the whole description of the estate.
 
console.log(myEstate.calculateWaterUsagePerWeek()); // This should print 2.8
 
myEstate.cloneAllTheRosesAndChangeTheirColors(); // This should clone the rose and make a second one.
console.log(myEstate.roseArbor.plants.length == 2);
 