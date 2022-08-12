let a=[1,2,3,4,4,3,2,5,5,6 ,10,11,7,7,8,9,8]
let b=[]
let c=a.length
for(i=0;i<c;i++){
    if(b.indexOf(a[i])==-1){
        b.push(a[i])
    }
    
}
console.log(b)