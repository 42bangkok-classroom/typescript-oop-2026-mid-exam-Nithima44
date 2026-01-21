// Write your code below
const a = Number(process.argv[2]);
if (a<0 || a>100 || isNaN(a)){
    console.log('Invalid input')
}
if (a>=0 && a<=49){
    console.log('Grade is F')
} else if(a>=50 && a<=59){
    console.log('Grade is D')
}else if(a>=60 && a<=69){
    console.log('Grade is C')
}else if(a>=70 && a<=79){
    console.log('Grade is B')
}else if(a>=80 && a<=100){
    console.log('Grade is A')
}
