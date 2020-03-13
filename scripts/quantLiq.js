

const quantFact = extendContent(GenericCrafter, "quantLiq", {

draw(tile){
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    },
    
generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
	
update(tile){
	
	},

})

quantFact.configurable = true;
quantFact.consumes.item();
quantFact.outputItem = new ItemStack(Items.lead, 1);




