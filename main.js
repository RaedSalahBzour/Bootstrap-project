let dashBoard = document.querySelector(".dashb");
let studentbtn = document.querySelector(".std");
let titleName = document.querySelector(".title-name");
let subTitle = document.querySelector(".sub-title");
let date = document.querySelector(".drop-btn");
let firstSq = document.querySelector(".first-sq");
let secondSq = document.querySelector(".second-sq");
let thirdSq = document.querySelector(".third-sq");
let fourthSq = document.querySelector(".fourth-sq");
let maincontent = document.querySelector(".captionTable");
let rightSide = document.querySelector(".right-side");
let marks = document.querySelector(".marks");
let eachDegree = document.querySelector(".deg");
let table = document.querySelector(".table");
let login = document.querySelector(".login");
let mainContainer = document.querySelector(".main-container");
studentbtn.addEventListener("click", () => {
  rightSide.classList.add("d-none");
  titleName.innerHTML = "Student List";
  subTitle.innerHTML = ` <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Apps</a></li>
  <li class="breadcrumb-item active" aria-current="page">Student List</li>
</ol>`;
  date.innerHTML = `<button
class="btn btn-date dropdown-toggle"
type="button"
data-bs-toggle="dropdown"
aria-expanded="false"
>
Aug 23
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Aug 22</a></li>
<li>
  <a class="dropdown-item" href="#">Aug 21</a>
</li>
<li>
  <a class="dropdown-item" href="#">Aug 20</a>
</li>
</ul>`;
  firstSq.innerHTML = ` <div class="block font-bold fs-3">2,064</div>
<div>Total Students</div>`;
  firstSq.setAttribute(
    "style",
    "background-color: rgb(52, 134, 155)!important;display:block!important; color:white"
  );

  secondSq.innerHTML = ` <div class="block font-bold fs-3">1,738</div>
  <div>Registered</div>`;
  secondSq.setAttribute(
    "style",
    "background-color: rgb(36, 196, 196)!important;display:block!important; color:white"
  );
  thirdSq.innerHTML = ` <div class="block font-bold fs-3">1100</div>
    <div>New</div>`;
  thirdSq.setAttribute(
    "style",
    "background-color: rgb(18, 211, 114)!important;display:block!important; color:white"
  );
  fourthSq.innerHTML = ` <div class="block font-bold fs-3">964</div>
      <div>Pending</div>`;
  fourthSq.setAttribute(
    "style",
    "background-color: rgb(216, 70, 94)!important;display:block!important; color:white"
  );
  maincontent.innerHTML = "";
  marks.classList.add("w-100");
  maincontent.appendChild(marks);
  firstSq.firstElementChild.classList.add("justify-content-center", "d-flex");
  secondSq.firstElementChild.classList.add("justify-content-center", "d-flex");
  thirdSq.firstElementChild.classList.add("justify-content-center", "d-flex");
  fourthSq.firstElementChild.classList.add("justify-content-center", "d-flex");
  firstSq.lastElementChild.classList.add("justify-content-center", "d-flex");
  secondSq.lastElementChild.classList.add("justify-content-center", "d-flex");
  thirdSq.lastElementChild.classList.add("justify-content-center", "d-flex");
  fourthSq.lastElementChild.classList.add("justify-content-center", "d-flex");
  table.innerHTML = ` <thead>
  <tr>
  <td scope="col " class="p-3 f-w-low ">ID</td>
    <td scope="col " class="p-3 f-w-low">Name</td>
    <td scope="col" class="p-3 f-w-low">Specialest</td>
    <td scope="col" class="p-3 f-w-low">Year</td>
    <td scope="col" class="p-3 f-w-low">Date</td>
    <td scope="col" class="p-3 f-w-low">Supervisor</td>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row" class="p-3 f-w-low bg-secondary">1</th>
    <td class="p-3 f-w-low bg-secondary">ahmad</td>
    <td class="p-3 f-w-low bg-secondary">Computer Science</td>
    <td class="p-3 f-w-low bg-secondary">1st Year</td>
    <td class="p-3 f-w-low bg-secondary">2024/05/01</td>
    <td class="p-3 f-w-low bg-secondary">Name</td>
  </tr>
  <tr>
    <th scope="row" class="p-3 f-w-low ">1</th>
    <td class="p-3 f-w-low ">ali</td>
    <td class="p-3 f-w-low ">Computer Science</td>
    <td class="p-3 f-w-low ">2st Year</td>
    <td class="p-3 f-w-low ">2024/05/01</td>
    <td class="p-3 f-w-low ">Name</td>
  </tr>
  <tr>
    <th scope="row" class="p-3 f-w-low bg-secondary">1</th>
    <td class="p-3 f-w-low bg-secondary">aseel</td>
    <td class="p-3 f-w-low bg-secondary">Computer Science</td>
    <td class="p-3 f-w-low bg-secondary">3st Year</td>
    <td class="p-3 f-w-low bg-secondary">2024/05/01</td>
    <td class="p-3 f-w-low bg-secondary">Name</td>
  </tr><tr>
  <th scope="row" class="p-3 f-w-low ">1</th>
  <td class="p-3 f-w-low ">yamen</td>
  <td class="p-3 f-w-low ">Computer Science</td>
  <td class="p-3 f-w-low ">4st Year</td>
  <td class="p-3 f-w-low ">2024/05/01</td>
  <td class="p-3 f-w-low ">Name</td>
</tr>

</tbody>`;
  let containerbtns = document.createElement("div");
  containerbtns.classList.add("text-end");
  let btnpre = document.createElement("button");
  let textpre = document.createTextNode("Previous");
  btnpre.classList.add("bg-secondary");
  btnpre.appendChild(textpre);
  containerbtns.appendChild(btnpre);
  let btn1 = document.createElement("button");
  btn1.classList.add("active1");
  let textbtn1 = document.createTextNode("1");
  btn1.appendChild(textbtn1);
  containerbtns.appendChild(btn1);
  let btn2 = document.createElement("button");
  let textbtn2 = document.createTextNode("2");
  btn2.appendChild(textbtn2);
  containerbtns.appendChild(btn2);
  let btn3 = document.createElement("button");
  let textbtn3 = document.createTextNode("3");
  btn3.appendChild(textbtn3);
  containerbtns.appendChild(btn3);
  let btnnext = document.createElement("button");
  let textnext = document.createTextNode("Next");
  btnnext.appendChild(textnext);
  containerbtns.appendChild(btnnext);
  table.parentNode.appendChild(containerbtns);
});
login.addEventListener("click", () => {
  mainContainer.parentNode.setAttribute(
    "style",
    "background-color:#e9e9e9!important; position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
  );
  mainContainer.innerHTML = `<div class="" style="width: 40rem;height:25rem;display:flex;background-color:white!important;">
  <img src="log.jpeg" class="img-login " alt="...">
  <div class="d-flex flex-column align-items-center w-100">
    <div class="container"> 
    <p class="text-center py-2 fs-4">logo</p>
    <p class="text-center fs-3 font-bold ">Sign In</p>
    <p class="text-center mx-4 font-small f-w-low w-75 ">Enter your email address and password to access admin panel</p>
    </div>
    <div><div >
    <label for="Input" class='fs-small'>Username</label>
    <input type="text" class="form-control" id="Input" placeholder="enter your username">
  </div>
  <div >
  <label for="Password" class='fs-small'>Password</label>
    <input type="password" class="form-control" id="Password" placeholder="Password">
  </div>
  <input type="submit" class="form-control bg-submit my-2" >
  </div>
    <div class="py-2">don't have an account? <a href="" class="text-decoration-none text-danger">Sign Up</a></div>
  </div>
</div>`;
});
