//Создайте цветные часы как в примере 

<html>
<body>
  <style>
.hour{
  color:tomato;
}
.min{
  color:green;
}
.sec{
  color:blue;
}
  </style>
<div id="clock">
  <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
</div>
  <input type="button" onclick="clockStart()" value="Старт">
  <input type="button" onclick="clockStop()" value="Стоп">

<script>

  function update() {
  let clock = document.querySelector('#clock');
  let date = new Date(); 
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].textContent = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].textContent = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].textContent = seconds;
}

let timerId;

function clockStart() { 
  timerId = setInterval(update, 1000);
  update(); 
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}
</script>
</body>
</html>

