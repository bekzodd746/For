let data = [1,2,3,4,5,6,7,8,9]

let toq =[]
let juft =[]

console.log(data);

for(i = 0; i<data.length; i++){
    if(data[i] % 2 == 0){
        juft.push(data[i])
    }else{
        toq.push(data[i])
    }
}

console.log(toq);
console.log(juft);

