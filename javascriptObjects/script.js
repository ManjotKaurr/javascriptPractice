//object of pen Stand

const penStand = {
    material:'plastic',
    color:'brown',
    itemsCapacity: 5,
    weight:'200gms',
    measurements : {
        length:20,
        breadth: 50,
    },
    hasClock:false,
    changeMaterial: function(mat){
        this.material = mat;
        console.log('Material changed to:', this.material);
    },
    changeItemsCapacity: function(item)
    {
        this.itemsCapacity = item;
        // return;
        console.log("Items Capacity changed to:", this.itemsCapacity);
    }
};
console.log("Items Capacity before: ", penStand.itemsCapacity);
penStand.changeItemsCapacity(29);
console.log("Items Capacity after: ", penStand.itemsCapacity);
const table = {
    material:'wood',
    measurements:{
        length:150,
        breadth:100,
        legs:'four',
        standHeight:350,
    },
    hasLocker:false,
    hasFootstand:true,

};
// console.log(penStand);