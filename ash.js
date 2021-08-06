/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function fun(){
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
      if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function fun1(){
    var checkBox = document.getElementById("movie");
    var text = document.getElementById("txt");
      if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}