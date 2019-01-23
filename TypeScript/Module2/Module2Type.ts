

let numArray : Array <any> = [
    1,
    2,
    'interruption cow',
    {
        index:3,
        title:'interrupting cow'
    }
]

let add1 = (num) => {
    return 1 + num;
}

numArray.map((item) => {
    alert(add1(item));
    return item;
})