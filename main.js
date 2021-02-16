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
const list3 = [1, 7, 4, 9, 3, 6, 7, 3, 4, 8, 0, 6, 23, 8, 3, 4]
for (let i = 0; i < list3.length; i++) {
    switch (i % 6) {
        case 0:
            console.log(i, "jest podzielne przez 6");
            break
        case 1:
            console.log(i, "reszta 1");
            break
        case 2:
        case 3:
            console.log(i, "reszta 2 albo 3");
            break
        default:
            console.log(i, "reszta 4,5");
    }

}
for (let i = list3.length - 1; i >= 0; i--) {
    console.log(i);
}
for (let i = list3.length - 1; i >= 0; i = i - 2) {
    console.log(i);
}
for (let i = list3.length - 1; i >= 0; i -= 3) {
    console.log(i);
}
for (let i = 0; i < list3.length; i += 1) {
    if (i % 6 === 0) {
        console.log(i, "jest podzielne przez 6");
    }
    else if (i % 6 === 1) {
        console.log(i, "reszta 1");
    }
    else if (i % 6 === 2 || i % 6 === 3) {
        console.log(i, "reszta 2 albo 3");
    }
    else {
        console.log(i, "reszta 4,5");
    }
}