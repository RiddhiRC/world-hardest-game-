var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["910daa9e-44ec-434c-993c-2db0c068eb8c","fcf8ba71-b650-41f0-b0c2-74c7e562a72a"],"propsByKey":{"910daa9e-44ec-434c-993c-2db0c068eb8c":{"name":"car_yellow_1","sourceUrl":null,"frameSize":{"x":70,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"czVj_UJGDcpb8xoJApJGzxcPrjXoGMGY","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":120},"rootRelativePath":"assets/910daa9e-44ec-434c-993c-2db0c068eb8c.png"},"fcf8ba71-b650-41f0-b0c2-74c7e562a72a":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"BPXp09Hu3naHcP6jF32Qyua44_f0hDM1","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/fcf8ba71-b650-41f0-b0c2-74c7e562a72a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
 var boundary3=createSprite(3,190,15,140);
  var boundary4=createSprite(399,190,15,140);
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
 
   
 car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";

car1.velocityY=8;
car2.velocityY=8;
car3.velocityY=-8;
car4.velocityY=-8;
 
//add the velocity to make the car move.

function draw() {
   background("white");
textSize(24);
text("Lives: " + life ,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  sam.bounceOff(boundary3);
 sam.bounceOff(boundary4);
if (keyDown(RIGHT_ARROW)) {
    sam.velocityX=5;
    sam.velocityY=0;
  }
  if (keyDown(LEFT_ARROW)) {
      sam.velocityX=-5;
      sam.velocityY=0;
    }
      
  if (sam.isTouching(car1)||
  sam.isTouching(car2)||
  sam.isTouching(car3)||
  sam.isTouching(car4)) {
    sam.x=20;
    sam.y=190;
    life = life + 1 ;
    playSound("assets/category_hits/8bit_splat.mp3",false);
  }
  
  
if (keyWentUp(LEFT_ARROW)) {
  sam.velocityY=0;
  sam.velocityX=0;
}
if (keyWentUp(RIGHT_ARROW)) {
  sam.velocityY=0;
  sam.velocityX=0;
}

if (sam.collide(boundary4)) {
textSize(18);
text("you win!!!", 200, 200);
 playSound("assets/category_achievements/melodic_win_2.mp3",false)   ;                    
    }
if (life > 20) {
textSize(18);
text("GAME OVER", 200, 200);
car1.velocityY=0;
car2.velocityY=0;
car3.velocityY=0;
car4.velocityY=0;
sam.velocityX=0;
sam.velocityY=0;
}

    
        
                
  
  
  
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
