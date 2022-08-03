// in web browsers, the window object is also the global ibject:

console.log(this === window);


a = 37;
console.log(window.a);


this.b = "mdn";
console.log(window.b)
console.log(b)