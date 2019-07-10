const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("addBtn");

const trash = document.getElementsByClassName('de');
const refresh = document.getElementById("refBtn");

var LIS, id=0;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

dateElement.innerText = today;

add.addEventListener("click", function() {
  var todo = input.value;
  if (todo != "") {
      var item = '<li class="item"><i class="fa fa-circle-thin co" onclick="doneTodo(';
      item = item + id;
      item = item +')" id="';
      item = item + id;
      item = item + '"></i><p class="text">';
      item = item + todo;
      item = item + '</p><i class="fa fa-trash-o de" onclick="delt(';
      item = item + id;
      item = item + ')"></i></li>';
      list.innerHTML = list.innerHTML + item;
      input.value = "";
      id++;
  }
});

refresh.addEventListener("click", function() {
  list.innerHTML = "";
  input.value = "";
});

function delt(index) {
  document.getElementById(index).parentNode.remove();
}

function doneTodo(index) {
  var temp = document.getElementById(index);
  if (temp.classList.contains("fa-circle-thin")) {
    temp.classList.remove("fa-circle-thin");
    temp.classList.add("fa-check-circle");
    temp.parentNode.getElementsByClassName("text")[0].classList.add("lineThrough");
  }else {
    temp.classList.remove("fa-check-circle");
    temp.classList.add("fa-circle-thin");
    temp.parentNode.getElementsByClassName("text")[0].classList.remove("lineThrough");
  }
}
