function* idMaker() {
    let id  = 1;
    while (true){
        yield id;
        id ++;
    }
    

  
}

const id = idMaker();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

// function* fontGenerator(size) {
//   let font = size;
//   while (true) {
//     var value = yield null;
//     console.log(value);
//     if (value == "up") {
//       console.log((font += 2));
//     }
//     if (value == "down") {
//       console.log((font -= 2));
//     }
//     if (value == "") {
//       console.log(font);
//     }
//   }
// }

// var g = fontGenerator(12);
// g.next(1);

// g.next("up");
// g.next("up");
// g.next("up");

// g.next("down");
// g.next("down");
// g.next("down");

// g.next("");
