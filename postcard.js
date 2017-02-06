function textChangeListener (evt) {
      var id = evt.target.id;
      var text = evt.target.value;
      
      if (id == "topLineText") {
        window.topLineText = text;
      } else {
        window.bottomLineText = text;
      }
      
      writeText(window.imageSrc, window.topLineText, window.bottomLineText);
    }
    
    function writeText(image, topLine, bottomLine) {
      // Get Canvas2DContext
      var canvas = document.querySelector('canvas');
      var ctx = canvas.getContext("2d");
      if (image != null)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      
      // Text attributes
      ctx.font = '30pt Impact';
      ctx.textAlign = 'center';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.fillStyle = 'white';
      
      if (topLine != null) {
        ctx.fillText(topLine, canvas.width / 2, 40);
        ctx.strokeText(topLine, canvas.width / 2, 40);
      }
      
      if (bottomLine != null) {
        ctx.fillText(bottomLine, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomLine, canvas.width / 2, canvas.height - 20);
      }
    }
    
    function saveFile() {
		//saving the cavas to local machine
		var canvas = document.querySelector("canvas");
		var dataURL = canvas.toDataURL("image/png");
		var postData = "canvasData"+dataURL;
		var ajax = new XMLHttpRequest();
		ajax.open("POST",'saveImage.php', true);
		ajax.setRequestHeader('Content-Type', 'canvas/upload');
		ajax.onreadystatechange=function()
	{
		if (ajax.readyState === 4)
			{alert("image saved");}
	};
	ajax.send(postData);
    }
    
   function handleFileSelect(evt) {
      var canvasWidth = 500;
      var canvasHeight = 500;
      var file = evt.target.files[0];
      
      
      
      var reader = new FileReader();
      reader.onload = function(fileObject) {
        var data = fileObject.target.result;
        
        // Create an image object
        var image = new Image();
        image.onload = function() {
          
          window.imageSrc = this;
          writeText(window.imageSrc, null, null);
        }
        
        // Set image data to background image.
        image.src = data;
        console.log(fileObject.target.result);
      };
      reader.readAsDataURL(file)
    }

function myFunction() {
    alert("See README text");
}



    
    