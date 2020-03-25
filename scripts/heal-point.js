//dik why time doesnt work xD
var time = 300;
// effect to boom
const mendLaunchEffect = newEffect(20, e => {
    Draw.color(Color.lime, Color.green, e.fin()); 
    Lines.stroke(e.fout() * 3); 
    Lines.circle(e.x, e.y, e.fin() * 30); 
});
//exstend block  and give some function
const mend = extendContent(Block, "mend-point", {
update(tile){
//timer
	if ( time > 300) {
	time--;
	}
//else xD
	else {
	
	Effects.effect(mendLaunchEffect, tile);
	for ( var i = 10; i > 1; i--){
	time = 500;
	//call healt bullet 
	Calls.createBullet(Bullets.healBulletBig, tile.getTeam(), tile.drawx(), tile.drawy(), Mathf.random(360), Mathf.random(0.5, 1.0), Mathf.random(0.2, 1.0));
	}
	//destroy block
	tile.entity.health -= 999;
	};
	
	},
 
})

