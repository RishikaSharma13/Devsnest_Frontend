const whiteDivs = [
    129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
    190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
    250, 252, 266, 268, 271, 273,
  ];
  
  let container = document.getElementsByClassName("container")[0];
  var box;
  for (let i = 0; i < 400; i++) {
    box = document.createElement("div");
    box.className = "box";
    if (whiteDivs.includes(i)) {
      box.classList.add("white");
    }
    container.appendChild(box);
  }
  
  let clicked_box = document.querySelectorAll(".box");
  
  clicked_box.forEach((box) => {
    box.addEventListener("click", (e) => {
      e.target.classList.toggle("white");
    });
  });