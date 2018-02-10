var myImage = document.querySelector('img'); //get 'img' element from document.
myImage.onclick = function(){ //action when click 'myImage'
  var mySrc = myImage.getAttribute('src'); //current file name of "myImage"
  if(mySrc === 'images/peach.JPG'){
    myImage.setAttribute('src','images/meat.JPG'); //change the file name of "mymage"
  }else{
    myImage.setAttribute('src','images/peach.JPG');
  }
}

var myButton = document.querySelector('button'); //get 'button' element
var myHeading = document.querySelector('h1'); //get 'h1' element

function setUserName(){
    var myName = prompt('Tell me your name!'); //prompt() require input something
    localStorage.setItem('name', myName); // create 'name' data
    myHeading.textContent = "Hello " + myName +"!";
}
if(!localStorage.getItem('name')){
  setUserName();
  alert('no name');
}else{
  //alert(localStorage.getItem('name'));
  var StoredName = localStorage.getItem('name');
  myHeading.textContent = "Hello "+StoredName+", again!";
}

myButton.onclick = function(){
  setUserName();
}
