const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("addBtn");

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
      var item = '<li class="item"><i class="fa fa-circle-thin co" job="complete" id="';
      item = item + id;
      item = item + '"></i><p class="text">';
      item = item + todo;
      item = item + '</p><i class="fa fa-trash-o de" job="delete" id="';
      item = item + id;
      item = item + '"></i></li>';
      list.innerHTML = list.innerHTML + item;
      input.value = "";
      id++;
  }
});

// input.addEventListener("keyup",function(even){
//     if(event.keyCode == 13){
//         const toDo = input.value;
//
//         // if the input isn't empty
//         if(toDo){
//             addToDo(toDo, id, false, false);
//
//             LIST.push({
//                 name : toDo,
//                 id : id,
//                 done : false,
//                 trash : false
//             });
//
//             // add item to localstorage ( this code must be added where the LIST array is updated)
//             localStorage.setItem("TODO", JSON.stringify(LIST));
//
//             id++;
//         }
//         input.value = "";
//     }
// });
