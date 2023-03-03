/**
* Classes in Javascript
* Class Declaration: Class Name {}
* Class Expression: const Name = class {}
*/
class PenHolder {
    constructor(
        // define parameters
        material,
        color,
        itemsCapacity,
        weight,
        length,
        breadth,
        hasClock
    ){
        // define properties
        this.material = material;
        this.color = color;
        this.itemsCapacity = itemsCapacity;
        this.weight = weight;
        this.measurements = {
            length: length,
            breadth: breadth,
        };
        this.hasClock = hasClock;
    }
    //add methods for like normal functions
    changeMaterial(mat){
        this.material = mat;
    }
    changeMeasurements(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }

}
export default PenHolder;