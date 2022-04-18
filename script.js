function* idMaker() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  yield 3;
  console.log(4);
  yield 4;
  console.log(5);
}

const id = idMaker();
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());

function* fontGenerator(size) {
  let font = size;
  while (true) {
    var value = yield null;
    console.log(value);
    if (value == "up") {
      console.log((font += 2));
    }
    if (value == "down") {
      console.log((font -= 2));
    }
    if (value == "") {
      console.log(font);
    }
  }
}

var g = fontGenerator(12);
g.next(1);

g.next("up");
g.next("up");
g.next("up");

g.next("down");
g.next("down");
g.next("down");

g.next("");
