type One = string
type Two = number | string  
type Three = 'hello'


let a: One = 'hello'
let b = a as Two


let c: Two = 2
const addOrConcat = (a: number, b: number, c: 'add' | 'contact' ): string | number => {
    if (c === 'add') {
        return a + b ;
    } else {
        return '' + a + b;
    }
};

let myVal: string = addOrConcat(2,2,'contact') as string
let myVal1: number = addOrConcat(2,2,'contact') as number




// 
const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('#img')! as HTMLImageElement

img.src
myImg.src




