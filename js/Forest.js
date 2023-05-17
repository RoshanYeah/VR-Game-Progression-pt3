AFRAME.registerComponent("forest",{
    schema:{
    //    id:{type:"string",default:"forestWorld"}
    },
    init:function(){
        for (var i = 1; i <= 20; i++) {
            //id
            var id = `hurdle${i}`;
      
            //position variables
            //  * 7 + -9;
            //  * 10 + -10;
            var posX = Math.random()* 7 + -9;
            var posY = 0
            var posZ = Math.random()* 1 + -1;
      
            var position = { x: posX, y: posY, z: posZ };
      
            //call the function
            this.runningWolf(id, position);
          }
    },
    forestEl:function(){

    },
    runningWolf: (id, position) => {
        //Get the terrain element
        var terrainEl = document.querySelector("#forestWorld");
    
        //creating the wolf model entity
        var wolfEl = document.createElement("a-entity");
    
        //Setting multiple attributes
        wolfEl.setAttribute("id", id);
    
        wolfEl.setAttribute("position", position);
        wolfEl.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 });
    
        //set the gLTF model attribute
        wolfEl.setAttribute("gltf-model", "assets/wolf/scene.gltf");
    
        //set animation mixer of models with animation
        wolfEl.setAttribute("animation-mixer", {});
    
        wolfEl.setAttribute("static-body",{shape:"sphere",sphereRaidus:5})
    
        //append the wolf entity as the child of the terrain entity
        terrainEl.appendChild(wolfEl);
      },
})