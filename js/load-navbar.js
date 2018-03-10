function loadNav() {
var theNav = document.getElementById("nav")
theNav.innerHTML = "
<div id="navbar-body">
  <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/67/BC-relief.png" alt="British Columbia" width="150" height="150"/>
  <br />
  <span id="logo">The JPEG Steller's Jay</span>
  <br />
  
  <div id="navbar">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about-page.html">About</a></li>
    <li><a href="game-page.html">Games</a></li>
    <li><a href="climate-page.html">Climate</a></li>
    <li><a href="contact-page.html">Contact</a></li>
  </ul>
  </div> 
</div>"
}
loadNav();