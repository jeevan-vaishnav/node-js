const num = 1;
const num1 = 10;

function addValues(){
    setTimeout(()=>{
    console.log(`${num} + ${num1} = ${num + num1}`);
},2000)
}

addValues();