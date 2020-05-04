const mainColor = Color.valueOf("8aa3f4");
var timeb = 5;
var n = 1;
var timea = 10;
const hj = 2;
const topRegion = Core.atlas.find(this.name + "-top");
const radius = 101.7;
const breakage = 550;
    const reload = 60;
	const charge = 10;
    const range = 80;	
    const speedBoost = 999;
    const speedBoostPhase = 0.75;
    const useTime = 400;
    const phaseRangeBoost = 20;

const blend = newEffect(10, e => {
	
	Draw.blend(Blending.additive);
	
	Draw.color(Color.valueOf("8aa3f4"), Color.valueOf("a9d8ff"), e.fin());
	Draw.rect(Core.atlas.find("bloomex-narvall-blend"), e.x, e.y, e.rotation - 90);
	
	Draw.blend();

	//Draw.color(Color.valueOf("ffffff"));
	//Fill.circle(e.x, e.y, (1 * e.fout()) * (e.rotation / 1.3));
});

const narvile = extend(MissileBulletType , {
	range: function(b){
		return 500;
	},
	update: function(b){

		
		
		if (timeb < 0){
			Lightning.create(b.getTeam(), Color.valueOf("8aa3f4"), 150, b.x , b.y , Mathf.random(360), 12);
			timeb = 1.5;
		}
		else {
			timeb--;
		};
	},
	draw: function(b){},
	
});


narvile.trailColor = Pal.lancerLaser;
narvile.backColor = Pal.lancerLaser;
narvile.frontColor = Pal.lancerLaser;
narvile.bulletSprite =  "bloomex-circle";
narvile.speed = 0.5;
narvile.damage = 150;
narvile.lifetime = 500;
narvile.hitEffect = Fx.hitMeltdown;
narvile.despawnEffect = Fx.none;
//narvile.hitSize = 5;
narvile.pierce = true;
narvile.shootEffect = Fx.none;
narvile.smokeEffect = Fx.none;
        const broken = false;
		const heat ;
        const buildup = 1;
        const radscl = 0;
        const hit = 0.0 ;
        const warmup = 1.0
        const phaseHeat;

			
const narvall = extendContent(UnitType  , "narvall",{});


narvall.create(prov(() => new JavaAdapter(HoverUnit, {
    draw(){


    this.super$draw();
	}, 
    onDeath(){
		const rote = 0;
    
    for(var g = 0; g < 8; g ++){
      rote = g * 45;
      Calls.createBullet(narvile, this.getTeam(), this.x, this.y, Mathf.random(360), 1, 104);
    }
	this.super$onDeath();
 },
	update(){
		this.super$update();
		
		//heat = Mathf.lerpDelta(heat, consValid() ? 1 : 0, 0.08);
		if ( n => 10 ) {
			Effects.effect(blend, this.x, this.y , this.rotation , 1000 );
			Effects.effect(blend, this.x , this.y, this.rotation,(2 + Mathf.absin(Time.time(), 2, 2 / 4)) / 2);
			n = 0 ;
			print(n)
		}
		else {
			print(n);
			n++;
		};
},
	setStats(){
        super$setStats();

        stats.add(BlockStat.speedIncrease, (int)(100 * speedBoost), StatUnit.percent);
        stats.add(BlockStat.range, range / tilesize, StatUnit.blocks);
		},

    })));
const narvmain = extend(BasicBulletType, {
	range: function(){
		return 500;
	},
	
	despawned: function(b){
		for ( var i = 0 ; i < 2; i++){
			Bullet.create(this.frags[Mathf.round(Mathf.random(0, 1))], b, b.x, b.y, b.rot() + Mathf.range(15.0), Mathf.random(0.75, 1.25));
		}
		},

});
narvmain.frags = [  narvile  ,  narvile ];
narvmain.lifetime = 0;

const hackweap = extendContent(Weapon, "hackweap", {});

hackweap.weaponOffsetX = -2;
hackweap.weaponOffsetY = -10;
hackweap.reload = 250;
hackweap.alternate = true;
hackweap.length = 14;
hackweap.recoil = 1;
hackweap.bullet = narvmain
hackweap.shootSound = Sounds.artillery;
narvall.weapon = hackweap;
narvall.engineSize = 0;
const narvallfact = extendContent(UnitFactory, "narvall-factory", {});
print("load narvall");
