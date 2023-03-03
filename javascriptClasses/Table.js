/* creating javascript class
*
*/
class Table{
constructor(
    //defining parameters
    type,
    material,
    length,
    breadth,
    height,
    legs,
    standHeight,
    hasLocker,
    hasFootstand,
    numberOfChairs
){
    //define properties
    this.type = type,
    this.material = material;
    this.measurements = {
        length : length,
        breadth: breadth,
        height: height,
        legs: legs
    };
    this.standHeight = standHeight;
    this.hasLocker = hasLocker;
    this.hasFootstand = hasFootstand;
    this.numberOfChairs = numberOfChairs;

}
}

export default Table;