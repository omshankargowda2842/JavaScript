const num=100
let x=0;
let y=1;
let fn=x+y;
console.log(x)
while(y<=100){
    console.log(fn)
    fn=x+y,
    x=y,
    y=fn
}

