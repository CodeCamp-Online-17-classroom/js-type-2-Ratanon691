let a = undefined;
let b = null;
let c = b + '4 2';
let d = +a
let e = +b
let f = +c
console.log(d, e, f)
//d = NaN, e = 0, f = NaN
//undefined ไม่เป็นตัวเลขเลยเป็น NaN
//nullมีค่าเป็น 0 เมื่อเปลี่ยนเป็นตัวเลข
//b+ '4 2' มีค่าออกมาเป็นstring 'null4 2' เมื่อเปลี่ยนเป็นตัวเลขจึงมีค่าเป็นNaN
