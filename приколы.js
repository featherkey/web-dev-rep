//1
//function a(num){
//    return () => num
//}


const a = num => () => num

console.log(a(5)() === 5);
/*
//2
function a(){
    b=10
    console.log(this.b)
}

a()*/