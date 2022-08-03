//  CLASS EXPRESSIONS
// A class expression is another way to define a class. 
// Class expressions can be named or unnamed. 
// The name given to a named class expression is local to the class's body.
//  However, it can be accessed via the name property.

// UNNAMED
let Rectangle = class {
    constructor (height , width){
        this.height = height;
        this.width = width;

    }
}

console.log(Rectangle.name);
