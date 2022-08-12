let value="omshankar"
const k=()=>{
 let revesed=value.toString().split("").reverse().join("")
 let nstring=value.toString()
 
 if(revesed==nstring){
    console.log("palindrome")
 }else{
    console.log("not a palindrome")
 }
}
k();