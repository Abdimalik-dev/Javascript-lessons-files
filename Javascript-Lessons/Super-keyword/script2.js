//  using super in classes

// class Rectangle {
//     constructor(height , width) {
//         this.name = 'Rectangle';
//         this.height = height;
//         this.width = width;
//     }
//     getName () {
//         console.log('Hi , I am a ', this.name + ',');

//     }
// }   

class Rectangle {
    constructor(height, width) {
      this.name = 'Rectangle';
      this.height = height;
      this.width = width;
    }
    getName() {
      console.log('Hi, I am a ', this.name + '.');
    }
    
  }
  
  class Square extends Rectangle {
    constructor(length) {
      // Can't use this.height. It will throw a reference error
  
      // It calls the parent class's constructor
      super(length, length);
  
      // In derived classes, super() must be called before you
      // can use 'this'.
      this.name = 'Square';
    }
  }