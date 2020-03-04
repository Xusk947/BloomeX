
const picada = extendContent(Mech, "picada-ship", {
updateAlt: function(player){
player.healBy(Time.delta()* 0.1);
}});


const picad = extend(BasicBulletType, {});
picad.speed = 3;
picad.damage = 90;
picad.bulletWidth = 6;
picad.bulletHeight = 18;
picad.shootEffect = Fx.shootSmall;
picad.homingPower = 1;
picad.homingRange = 25;
picad.knockback = 0.1;
picad.hitShake = 0.2;
picad.bulletSprite = "tankx-picad";
picad.frontColor = Color.valueOf("#ffeecc");



const gun = extendContent(Weapon, "picada-gun", {});
gun.ejectEffect = Fx.blastsmoke;
gun.length = 3;
gun.width = 1;
gun.shots = 2;
gun.reload = 250;
gun.bullet = picad;
gun.alternate = true;

picada.weapon = gun;
picada.speed = 0.6;
picada.buildPower = 2.5;
picada.mass = 10;
picada.engineColor = Color.valueOf("#73D188FF");
picada.flying = true;
picada.health = 500;
picada.cellTrnsY = -3;
picada.engineOffset = 7;
