let regex1 = /[A-Z]/;
let testing = 'ABC';
let result = regex1.test(testing)
console.log(regex1.test(testing));

if(result){
    console.log('Huruf pertama adalah huruf besar')
} else {
    console.log('Huruf pertama adalah huruf kecil')
    
}

