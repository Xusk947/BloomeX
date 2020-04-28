//const resB = [

/*
const item = copper;
const copper = Items.copper ;
const lead = Items.lead;
var timer = 200;
*/

var i;
const quantFact = extendContent(GenericCrafter, "quantFact", {
    buildConfiguration(tile, table){
        table.addImageButton(Icon.left, Styles.clearTransi, run(() => { // предыдущая музыка (радио станция)
            tile.configure(0)
        })).size(50);
	    
        table.addImageButton(Icon.pause, Styles.clearTransi, run(() => { // пауза
             tile.configure(1)
        })).size(50);
	    
        table.addImageButton(Icon.right, Styles.clearTransi, run(() => { // следующая музыка (радио станция)
                tile.configure(2)
        })).size(50)
    },

    draw(tile){
        Draw.rect(this.region, tile.drawx(), tile.drawy());
    },
	
    generateIcons: function(){
	return [
	    Core.atlas.find(this.name),
	];
    },

    update(tile) {/*
	if (timer < 0){
	    timer--;
	    item = copper;
	} else {
	    item = lead;
	    timer = 200;
	};*/
    },
});

quantFact.configurable = true;
quantFact.consumes.item(Items.silicon , 2);
quantFact.outputItem = new ItemStack(Items.lead, 1);
