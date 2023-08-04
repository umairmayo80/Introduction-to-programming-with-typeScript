let greetings: string = 'Hello world'; // here semicolon are important

// greetings = 12; // it will generate error as we have defined the  

// typescript also provide suggestions on supported methods
greetings.toLowerCase()
console.log(greetings.toUpperCase())

//  Type inference
//  typescript can also automatically set the type upon initialization
let mynm = 6;

// now it will generate error: Type 'string' is not assignable to type 'number''
// mynm = 'asdf';



// any
let hero; // as there is no initialization, it will assing it type any

function getHero(){
    return 'hreo'
}

hero = getHero()
hero = 1;


// better approach is
let hero1: string;

hero1 = getHero() // now if this function return a different type than string, we will get error here

// this will remove the cannot redeclare block-scoped varibale errors
export {}