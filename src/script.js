var fgImage=null;
var bgImage=null;

function loadForegroundImage(){
  var imgFile = document.getElementById("fgfile");

  fgImage = new SimpleImage(imgFile);
  
  var canvas = document.getElementById("fgcan");
  
  fgImage.drawTo(canvas);
 }

function loadBackgroundImage(){
  var imgFile = document.getElementById("bgfile");

  bgImage = new SimpleImage(imgFile);
  
  var canvas = document.getElementById("bgcan");
  
  bgImage.drawTo(canvas);
 }
function clearcanvas(){
  fgImage=null;
  bgImage=null;

 var canvas = document.getElementById('fgcan');
 var context = canvas.getContext('2d'); 
 context.clearRect(0, 0, canvas.width, canvas.height); 
// bgImage.drawTo(canvas);
 var canvas = document.getElementById('bgcan');
 var context = canvas.getContext('2d'); 
 context.clearRect(0, 0, canvas.width, canvas.height); 
// fgImage.drawTo(canvas); 
 var canvas = document.getElementById('opcan');
 var context = canvas.getContext('2d'); 
 context.clearRect(0, 0, canvas.width, canvas.height);  

}

function greenScreen(){
  if (fgImage== null || !fgImage.complete()){
    alert("foreground not loaded");
    return ;
  }
  
   if (bgImage== null || !bgImage.complete()){
    alert("background not loaded");
    return ;
  }
  
  var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  for(var pixel of fgImage.values())
    {
      var x = pixel.getX();
      var y = pixel.getY();
      if(pixel.getGreen()>pixel.getRed()+pixel.getBlue())
      { var bgPixel = bgImage.getPixel(x,y);
        output.setPixel(x,y,bgPixel);
       }
      else
        {
          output.setPixel(x,y,pixel);
        }
   }
  
  var canvas = document.getElementById("opcan");
  
  output.drawTo(canvas);
}