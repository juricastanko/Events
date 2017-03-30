function Rectangle(height,width){
    this.height = height;
    this.width=width;
    this.calcArea=function(){
        return((2*height)+(2*width));

    };
    this.calcPerimeter=function(){
        return((2*height)+(2*width));
    }
}
var rex=new Rectangle(7,3);
var area=rex.calcArea();
var perimeter=rex.calcPerimeter();
console.log(area);
console.log(perimeter); 

