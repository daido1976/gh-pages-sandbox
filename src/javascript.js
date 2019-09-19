// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event#JavaScript
let element = document.getElementById("hoge");

const changeColorWithHover = () => {
  element.addEventListener(
    "mouseenter",
    event => {
      // highlight the mouseenter target
      event.target.style.backgroundColor = "red";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.backgroundColor = "blue";
      }, 500);
    },
    false
  );
};

const changeColorWithClick = () => {
  element.addEventListener(
    "click",
    event => {
      // highlight the mouseover target
      event.target.style.backgroundColor = "green";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.backgroundColor = "blue";
      }, 500);
    },
    false
  );
};

const moveElement = () => {
  document.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", onMouseMove);
    });
  });

  const onMouseMove = e => {
    element.style.left = `${e.clientX}px`;
    element.style.top = `${e.clientY}px`;
  };
};

moveElement();
changeColorWithClick();
changeColorWithHover();
