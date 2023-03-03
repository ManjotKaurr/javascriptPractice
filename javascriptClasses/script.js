/* import module PenHolder
* create a object for the class PenHolder
*/
import PenHolder from "./PenHolder.js";
import Table from "./Table.js";

const brownHolder = new PenHolder(
    'plastic',
    'brown',
    20,
    '2kg',
    300,
    350,
    true
);
const studyTable = new Table(
    'study table',
    'sandalwood',
    400,
    350,
    450,
    4,
    252,
    true,
    false,
    1,
);
const diningTable =  new Table(
    'dining Table',
    'wood',
    "6 ft",
    3000,
    460,
    4,
    550,
    false,
    true,
    8,

);

console.log('Study Table:', studyTable);
console.log('Dining Table:', diningTable);
console.log('Brown color pen holder:', brownHolder);
console.log('weight of the pen holder:', brownHolder.weight);