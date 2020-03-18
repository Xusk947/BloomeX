
var lvl = 1;
var time = 600
var i = time // Mathf.random(3,5) * 60 * 60;
var tru = 0;


Events.on(EventType.PlayEvent, cons(e => {
    lvl = 1;
}));






const hq = extendContent(CoreBlock , "hq", {

draw(tile){
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    },
    
generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
	
	
	
update(tile){
    
    if (tile.entity.timer.get(0, i)) {
        
        switch (lvl) {
            
        case 1: 
            UnitTypes.wraith.create(Team.sharded).add();
            lvl++;
            
            time = time * 1;
            break;
            
        
        case 2:
            lvl++;
            time = time * 2;
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            break;
            
        case 3:
            lvl++;
            time = time * 1.5;
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            break;
            
        case 4:
            lvl++;
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            break;
            
        case 5:
            lvl++;
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.revenant.create(Team.sharded).add();
            break;
            
            
        case 6:
            lvl++;
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.revenant.create(Team.sharded).add();
            break;
            
            case 7:
            lvl++;
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.revenant.create(Team.sharded).add();
            UnitTypes.revenant.create(Team.sharded).add();
            break;
            case 8:
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.wraith.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.ghoul.create(Team.sharded).add();
            UnitTypes.revenant.create(Team.sharded).add();
            UnitTypes.revenant.create(Team.sharded).add();
            break;

        }

        };
        
    
	},
drawLayer(tile){

    Draw.rect(Core.atlas.find(this.name + "-radar"), tile.drawx() - 8.3, tile.drawy() + 8.4,2 * Time.time()); 
	},
	
	



})
 
 
//hq.mech = Alpha;