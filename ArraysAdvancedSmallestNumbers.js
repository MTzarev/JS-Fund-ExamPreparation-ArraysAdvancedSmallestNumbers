function smallestNumbers(input) {
    let sorted = input.sort((a,b)=>{
        return a-b
    });
    console.log(sorted.slice(0,2).join(` `));
}
smallestNumbers([3, 0, 10, 4, 7, 3]);
