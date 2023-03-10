/* import module PenHolder
* create a object for the class PenHolder
*/
import Table from "../javascriptClasses/Table.js";

const studyTable = new Table(
    'Study Table',
    'Sandalwood',
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
    'Dining Table',
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
const content = 
`<h1>Text from script</h1>
<h1>Tables</h1>
<main>
<article>
<ul>
<li>Table Type: ${studyTable.type}</li>
<li>Made of: ${studyTable.material}</li>
<li>How long it is: ${studyTable.measurements.length}</li>
<li>How wide it is : ${studyTable.measurements.breadth}</li>
<li>What is its height : ${studyTable.measurements.height}</li>
<li>How many legs does it have : ${studyTable.measurements.legs}</li>
<li>What is its stand height : ${studyTable.measurements.height}</li>
<li>Does it have a locker : ${studyTable.hasLocker}</li>
<li>Does it have a footstand : ${studyTable.hasFootstand}</li>
<li>How many chairs it have : ${studyTable.numberOfChairs}</li>
</ul>
</article>
</main>`;

document.body.innerHTML = content;
console.log('Study Table:', studyTable);
console.log('Dining Table:', diningTable);
// console.log(document);