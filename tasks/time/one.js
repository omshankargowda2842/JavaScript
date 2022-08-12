

var today = new Date();

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// console.log(date)
// console.log(today)
day=today.getDate();
month=today.getMonth()+1
year=today.getFullYear()
console.log(day)
console.log(month)
console.log(year)
 let fulldate=`${day}-${month}-${year}`
  let time=new Date().toLocaleTimeString()
 console.log(time)
 console.log(fulldate)
