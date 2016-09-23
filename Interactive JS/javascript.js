function showProperties(element){
  document.getElementById('message').innerHTML = element.alt;
  var url =element.src;
  
 document.getElementById('message').style.backgroundImage = "url('"+url+ "')";
}

function clearproperties(xyz){

//document.getElementById('message').innerHTML='Hover over an image';
document.getElementById('message').style.backgroundImage = none;
//document.getElementById('message').style.background-color: #8e68ff;
//}
