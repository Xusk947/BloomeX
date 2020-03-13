


const helicopter = extendContent(UnitType  , "helicopter",{
    
    
})

helicopter.create(prov(() => new JavaAdapter(HoverUnit, { 
    draw(){
    	const vec = new Vec2();
        const rotation = Time.time() * 25;
        const reg = Core.atlas.find("bloomex-helicopter-rotator");
        
        for ( var s = 0; s < 2 ; s++){
        var	signB = [1 , -1];
        var	sign = signB[s];
        vec.trns(this.rotation , 2.75 , sign *16);
        Draw.rect(reg , this.x + vec.x, this.y + vec.y, reg.getWidth() * sign * Draw.scl, reg.getHeight() * Draw.scl,sign * rotation  );
        Draw.mixcol(Color.blue, this.hitTime / this.hitDuration);
        Draw.mixcol();
     //   Draw.shader(Shadow , shadow);
        this.drawLight();
      };
//  Draw.color();
    this.super$draw();

      
        
           
        
    }, 
    update(){
this.super$update();
}
    })));
    
//helicopter = this.global.helicopter ;