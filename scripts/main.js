// Cash
let name = document.querySelector("#name"),
  freindName = document.querySelector("#freindName"),
  c = document.querySelector(".target-style canvas"),
  ctx = c.getContext("2d");

// On Select Style
document.querySelectorAll(".styles img").forEach((img) => {
  img.addEventListener("click", (e) => {
    // If There Is Value In The Input Make This
    if (name.value !== "" && freindName.value !== "") {
      let imgObj = new Image();
      imgObj.onload = function () {
        // The Pattern (The Selected Style)

        ctx.fillStyle = ctx.createPattern(imgObj, "no-repeat");
        ctx.fillRect(0, 0, c.width, c.height);
        // Make The Style And Add The User Name And His Freind Name
        ctx.fillStyle = "white";
        ctx.font = "30px serif";
        ctx.fillText(`من: ${name.value}`, 5, c.height - 50);
        ctx.fillText(`الى: ${freindName.value}`, 5, c.height - 10);

        // Set The Style Place
        document.querySelector(".target-style").style.top = `${
          window.pageYOffset +
          document.querySelector(".target-style canvas").height -
          100
        }px`;
      };
      // Set The Source
      imgObj.src = e.target.src;

      // Appear The Style
      c.parentElement.classList.remove("hide");
    } else
    /* Else Make The Window Scroll Equal To 0 
    To Let The User Write His Name 
    And His Freind Name*/
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  });
});

function worningAction(inputVal, worningMassage) {
  /*Check If The Target Inpiut Equal To Nothing 
    Appear The Worning worningMassage
  Else 
    Hide The Worning Massage */
  if (inputVal == "") worningMassage.classList.remove("hide");
  else worningMassage.classList.add("hide");
}

name.addEventListener("input", () => {
  worningAction(name.value, document.querySelector("#name + p"));
});
freindName.addEventListener("input", () => {
  worningAction(freindName.value, document.querySelector("#freindName + p"));
});

// To Cansel The Style
document
  .getElementById("cansel")
  .addEventListener("click", (e) =>
    e.target.parentElement.classList.add("hide")
  );

// To Download The Style
document.getElementById("save").addEventListener("click", (el) => {
  el.target.setAttribute(
    "href",
    c.toDataURL("image/png").replace("image/png", "image/octet-stream")
  );
  el.target.setAttribute("download", "رمضان.png");
});
