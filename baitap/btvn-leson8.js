let= a = 10, b = 5, c ="1"
console.log(a + b)
console.log(a - c)
console.log(a + b + c)
console.log(a + c + b)
console.log((a + b) % 3)
console.log(a * b > 50 )
console.log(a ** b > 100)
console.log(a - (b++) == 5)
console.log(a - (++b) == 5)

// text2
let isTall = true, isMuscle = false, isHandsome = true
console.log(isTall && isMuscle)
console.log(isTall && isMuscle)
console.log(!isTall || !isMuscle)
console.log(isTall || !(isMuscle && isHandsome))
console.log(isMuscle && !(isTall || isHandsome))

let s=prompt("nhap s")
if(s>=8){
console.log("chuỗi này ok")
}else if(s<8){"chuoi nay ngan"}


let a=prompt
if(a>=18){
    console.log("Đủ 18 thì quẩy tiếp")
}else if(a>=16){
    console.log("Đợi thêm ít năm nữa")
}else if(a>16){
    console.log("Trẻ con không được ăn thịt chó")
}
for (let i = 1; i <=500; i++){
    console.log(i)
}
for(let i=1;i<=300;i++){
    if(i%2 ==0 && i%3==0)
    console.log(i)
}