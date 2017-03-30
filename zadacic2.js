var bob = {
    godine:25
}
var susan = {
    godine:30
};
console.log(bob.godine);
console.log(susan.godine);

var setAge = function(newAge){
    this.age=newAge;
};
bob.setAge=setAge;
susan.setAge=setAge;

bob.setAge(20);
susan.setAge(200);

