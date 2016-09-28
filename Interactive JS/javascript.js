function upDate(element){
  document.getElementById('image').innerHTML = element.alt;
  var url =element.src;
  
 document.getElementById('image').style.backgroundImage = "url('"+url+ "')";
 //console.log("In the function");
}

function unDo(){

		document.getElementById('image').style.backgroundImage = "";	
		document.getElementById('image').innerHTML='Hover over an image';
	}
	
