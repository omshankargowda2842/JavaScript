function add(a, b, op) {
    if (op == "sum") {
        return a + b
    }
    if (op == "multi") {
        return a * b
    }
}
let r1 = add(10, 20, "sum");
console.log(r1)
let r2 = add(10, 20, "multi");
console.log(r2)