
const helicopter = extendContent(UnitType  , "helicopter",{
    
    
})



helicopter.create(prov()) => 
JavaAdapter(HoverUnit , {
draw(){
    
    Draw.rect(Core.atlas.find(this.name + "-rotator"), tile.drawx(), tile.drawy());

}
update (){}

})))


/*
const laser = extendContent(BasicBulletType, {

    update: function(b){
        Effects.shake(1.2, 1.2, b.x, b.y);
        if(b.timer.get(1, 5)){
            Damage.collideLine(b, b.getTeam(), this.hitEffect, b.x, b.y, b.rot(), 310.0, true);
        }
    },


    draw: function(b){

        const colors = [Color.valueOf("ec745855"), Color.valueOf("ec7458aa"), Color.valueOf("ff9c5a"), Color.valueOf("ffffff")];
        const tscales = [1, 0.7, 0.5, 0.2];
        const strokes = [3.2, 2.1, 1.1, 0.8];
        const lenscales = [1, 1.12, 1.15, 1.17];
        for(var s = 0; s < 4; s++){
            Draw.color(colors[s]);
            for(var i = 0; i < 4; i++){
                Lines.stroke((9 + Mathf.absin(Time.time(), 0.8, 1.5)) * b.fout() * strokes[s] * tscales[i]);
                Lines.lineAngle(b.x, b.y, b.rot(), 310.0 * b.fout() * lenscales[i]);
            }
        }
    }
});

laser.speed = 0.001;
laser.damage = 90;
laser.lifetime = 60,
laser.hitEffect = Fx.hitMeltdown;
laser.despawnEffect = Fx.none;
laser.hitSize = 5;
laser.drawSize = 400;
laser.pierce = true;
*/
const test = extendContent(MissileBulletType, {});
test.damage = 100;
test.speed = 5;
const burner = extendContent(Weapon, "burner", {})
burner.bullet = test;
burner.length = 3;
burner.width = 1;
burner.shots = 3;
burner.reload = 65;
burner.alternate = true;
helicopter.weapon = burner;