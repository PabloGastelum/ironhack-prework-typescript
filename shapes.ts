class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  getArea(): number {
    throw new Error("NotImplementedError");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle("red", 5);
console.log(circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
