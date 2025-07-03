function greet() 
{
   console.log("Hello World"); 
}

greet();
greet();

//returning a function

function food()

{
    return "Rice"

}
let str = food();
console.log(str);

function name(user)
{
      return `Hello ${user}`
}

let user = 'Joy';
let string = name(user);
console.log(string);