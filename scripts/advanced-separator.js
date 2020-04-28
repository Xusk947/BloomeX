const advSep = extendContent(Separator, "advanced-separator", {
	print("loaded");
	
	draw(tile) {
    	    Draw.rect(this.region, tile.drawx(), tile.drawy());
	},

	drawLayer(tile){
    	    Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},

	generateIcons: function(){
	    return [
		Core.atlas.find(this.name),
		Core.atlas.find(this.name + "-rotator"),
		Core.atlas.find(this.name + "-top")
	    ];
	},
	
});

//adv-sep.layer = Layer.turret;
