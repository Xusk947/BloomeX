

//create the block type
const nukeCarFactory = extendContent(Block, "nuke-car-factory", {
    //override the method to build configuration
    buildConfiguration(tile, table){
        table.addImageButton(Icon.arrowUpSmall, Styles.clearTransi, run(() => {
            //configure the tile to signal that it has been pressed (this sync on client to server)
            tile.configure(0)
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
    },

    //override configure event
    configured(tile, value){
        for(var i = 0; i < 15; i++){
                tile.entity.health = 0;
                }
        
    }
})

nukeCarFactory.unitType : UnitTypes.nuke-car;
nukeCarFactory.maxSpawn:1;
nukeCarFactory.produceTime: 600;