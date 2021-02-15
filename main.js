console.log("siema siema o tej porze każdy wypić może")
let a = 333
const b = 444
console.log(a + b)
a = 222
console.log(a + b)
a = 111
console.log(a + b)
a = 0
console.log(a + b)
for (let i = 0; i < 20; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("foobar");
        } else {
            console.log("foo")
        }
    } else if (i % 5 === 0) {
        console.log("bar")
    } else {
        console.log(i);
    }
}
for (let i = 0; i < 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("foobar");
    } else if (i % 3 === 0) {
        console.log("foo")
    } else if (i % 5 === 0) {
        console.log("bar")
    } else {
        console.log(i);
    }
}
for (let i = 0; i < 20; i++) {
    if (i % 15 === 0) {
        console.log("foobar");
    } else if (i % 3 === 0) {
        console.log("foo")
    } else if (i % 5 === 0) {
        console.log("bar")
    } else {
        console.log(i);
    }
}
const list = [1, 2, 3, 3, 4, 4, 4]
let sum = 0
console.log(list);
console.log(list.length);
for (let i = 0; i < list.length; i++) {
    let wynik = list[i] + sum
    sum = wynik
    console.log({ i, listI: list[i], sum });
}
console.log({ sum });