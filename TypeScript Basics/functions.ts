function addTwo(num: number){
    return num+2 // typescript will automatically infer the return type
}


// addTwo("5") // now this will generate error

console.log(addTwo(2))


// function singUp(name: string, email:string, isPaid: boolean){
//     return true;
// }

// default values
// function singUp(name: string, email:string, isPaid: boolean = true){
//     return true;
// }


// define strict return type of function
function f1(x: number): number{
    return 0;
}

// we can also define multiple return type
function loginIn(username:string, password: string) {
    if(username && password){
        return true
    } 
    return "200" //error code
}


//  function overloading in typescript.
function singUp(name: string, email:string): string
function singUp(username: string, email:string):string {
    return "Heloo";
}