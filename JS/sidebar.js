var mini = true;

function toggleSidebar() {
  if (mini) {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("invisible").innerHTML = "OTHER<br>LANGUAGES";
    this.mini = false;
  } else {
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("invisible").innerHTML = "<br><br>";
    this.mini = true;
  }
}