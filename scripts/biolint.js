const mainColor = Color.valueOf("8aa3f4");

const biomissile = extend(MissileBulletType , {});
            biomissile.bulletWidth = 8;
            biomissile.bulletHeight = 8;
            biomissile.bulletShrink = 0;
            biomissile.drag = -0.5;
			biomissile.speed = 2
            biomissile.splashDamageRadius = 30;
			biomissile.trailColor = Pal.lancerLaser;
			biomissile.backColor = Pal.lancerLaser;
			biomissile.frontColor = Pal.lancerLaser;
            biomissile.splashDamage = 22;
            biomissile.lifetime = 150;
            biomissile.hitEffect = Fx.blastExplosion;
            biomissile.despawnEffect = Fx.blastExplosion;
			biomissile.keepVelocity = false;
			
const biolint = extendContent(UnitType  , "biolint",{});
const bioweapmain = extend(BasicBulletType, {
	range: function(){
		return 350;
	},
	
	despawned: function(b){
		for ( var i = 0 ; i < 2; i++){
			Bullet.create(this.frags[Mathf.round(Mathf.random(0, 4))], b, b.x, b.y, b.rot() + Mathf.range(15.0), Mathf.random(0.75, 1.25));
		}
		},
	
	draw: function(b){}
});
bioweapmain.keepVelocity = false;
bioweapmain.speed = 0;
bioweapmain.damage = 0;
bioweapmain.lifetime = 1;
//bioweapmain.fragBullets = 12;
bioweapmain.frags = [  biomissile , biomissile , Bullets.arc , Bullets.arc , Bullets.lancerLaser ,];
bioweapmain.splashDamageRadius = 20;
bioweapmain.splashDamage = 8;
bioweapmain.hitSize = 8;
bioweapmain.bulletWidth = 10;
bioweapmain.bulletHeight = 7;
//bioweapmain.bulletShrink = 0;
bioweapmain.keepVelocity = true;

biolint.create(prov(() => new JavaAdapter(HoverUnit, {
    draw(){

//  Draw.color();
    this.super$draw();
	}, 

	update(){
		
this.super$update();
}
    })));

const bioweap = extendContent(Weapon, "bioweap", {});

bioweap.weaponOffsetX = -2;
bioweap.weaponOffsetY = -10;
bioweap.reload = 13;
bioweap.alternate = true;
bioweap.length = 14;
bioweap.width = 16.25;
bioweap.recoil = 1;
bioweap.bullet = bioweapmain
bioweap.shootSound = Sounds.artillery;
biolint.weapon = bioweap;
bioweap.engineSize = 0;
print("load biolint");
