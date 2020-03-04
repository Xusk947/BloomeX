const nukeCar = extendContent(unitType, "nuke-car", {
    onDeath(){
        Damage.damage(tile.worldx(), tile.worldy(), explosionRadius * 30 *tilesize, explosionDamage * 30)

    }
});

nukeCar.localizedName :"Nuke Car";
