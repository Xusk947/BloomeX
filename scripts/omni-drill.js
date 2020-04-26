
//omniDrill.drillTime = maxHp;
const omniDrill = extendContent(Drill, "omni-drill", {
	draw(tile){
		
		Draw.rect(this.region, tile.drawx(), tile.drawy());
		//Draw.rect(Core.atlas.find(this.name + "-rotator"), tile.drawx(), tile.drawy(), tile.entity. * 2);
		//Draw.rect(Core.atlas.find(this.name + "-top"),		tile.drawx(), tile.drawy());
		Draw.color(tile.entity.liquids.current().color);
		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
		

		
		
	},
	drawLayer(tile){
		Draw.rect(Core.atlas.find(this.name + "-top"),tile.drawx() , tile.drawy());
		Draw.rect(Core.atlas.find(this.name + "-rotator"), tile.drawx() , tile.drawy() ,tile.entity.drillTime * 2 );
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
			Core.atlas.find(this.name + "-rotator"),
			Core.atlas.find(this.name + "-top")
		];
	},	
});
omniDrill.layer = Layer.turret;
omniDrill.warmupSpeed = 0.009;
omniDrill.drillTime = 300;