var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopup=document.getElementById("addpopup")

addpopup.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"
})


var cancelbtn=document.getElementById("cancel")
cancelbtn.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})

var container=document.querySelector(".container")

var addbook=document.getElementById("add")
var booktitle=document.getElementById("booktitle")
var bookauthorinput=document.getElementById("bookauthor")
var shortdescriptioninput=document.getElementById("shortdescription")

addbook.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","bookcontainer")
  div.innerHTML=`<h2>${booktitle.value}</h2>
  <h5>${bookauthor.value}</h5>
  <p>${shortdescription.value}</p>
  <button onclick="del(event)" class="bookcontainerbtn">Delete</button>`
  container.append(div)
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})

function del(event){
  event.target.parentElement.remove()
}