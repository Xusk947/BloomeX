var rotatorSpeed = 3;

const adv-sep = extendContent(GenericCrafter, "advanced-separator", {

	draw(tile){

    Draw.rect(this.region, tile.drawx(), tile.drawy());
    Draw.rect(Core.atlas.find(this.name + "-rotator"), tile.drawx(), tile.drawy(), tile.entity.totalProgress  * rotateSpeed);

	},

	drawLayer(tile){

    Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},

	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
			.atlas.find(this.name + "-rotator"),
			Core.atlas.find(this.name + "-top")
		];
	},
	
});

adv-sep.layer = Layer.turret;