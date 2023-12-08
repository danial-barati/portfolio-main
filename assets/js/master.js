let _scroll = document.getElementById("scrollbar");
let _status = _scroll.getAttribute("data-status");
let _menulist = document.getElementById("menulist");

document
  .getElementsByClassName("spancursor")[0]
  .addEventListener("click", (e) => {
    e.stopImmediatePropagation()
    if (_status == "off") {
      _scroll.style.height = _scroll.scrollHeight + "px";
      _menulist.style.transform = "rotate(90deg)";
      _scroll.setAttribute("data-status", "on");
    } else {
      _scroll.style.height = "0";
      _menulist.style.transform = "rotate(0deg)";
      _scroll.setAttribute("data-status", "off");
    }
  });

let _header = document.getElementsByTagName("header")[0];
let sec = document.querySelectorAll(".fademe > div");

console.log(sec);

window.addEventListener("scroll", () => {
  let x = window.scrollY;

  if (x > 200) {
    if (x > 201 && x < 250) {
      _add();
    }
    _header.style.transform = "translateY(" + x + "px)";
    _header.style.backdropFilter = "blur(25px)";
    _header.style.backgroundColor = "rgba(245, 245, 245, 0.071)";
    _header.style.borderRadius = "10px";
  } else {
    _header.style.transform = "translateY(0px)";
    _header.style.removeProperty("background-color");
    _header.style.removeProperty("backdrop-filter");
  }

  sec.forEach((item, index) => {
    if (x + 400 > item.getAttribute("data-offset")) {
      item.classList.remove("hid2");
    } else {
      item.classList.add("hid2");
    }
  });
});

function _add() {
  _header.style.transition = "1s";
  setTimeout(() => {
    _header.style.removeProperty("transition");
  }, 1000);
}

sec.forEach((val, i) => {
  val.setAttribute("data-offset", val.offsetTop);
  val.classList.add("hid2");
  val.style.transition = "700ms";
});

window.addEventListener("click", () => {
  _scroll.style.height = "0";
  _menulist.style.transform = "rotate(0deg)";
  _scroll.setAttribute("data-status", "off");
});
