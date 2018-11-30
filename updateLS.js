// if (!localStorage.pageLoadCount)
// 	localStorage.pageLoadCount = 0;
// localStorage.pageLoadCount = parseInt(localStorage.pageLoadCount) + 1;
// document.getElementById('greeting').textContent = localStorage.pageLoadCount;


document.getElementById("greeting").innerHTML = localStorage.getItem("Uname");
if (localStorage.getItem("Uname"))
  document.getElementById("getName").placeholder = localStorage.getItem("Uname");
if (localStorage.getItem("Uemail"))
  document.getElementById("getEmail").placeholder = localStorage.getItem("Uemail");
if (localStorage.getItem("userTags"))
  document.getElementById("tagBox").innerHTML = localStorage.getItem("userTags");
