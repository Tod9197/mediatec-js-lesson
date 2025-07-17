let num1 = 5;
console.log(num1);

num1 = 15;
console.log(num1);

const apple = 'りんご';
console.log(apple);

const fruits = ['apple','banana','orange'];
console.log(fruits);
console.log(fruits[2]);


console.log('おまけ 配列の最後にpeachを追加');

fruits.push('peach');
console.log(fruits);

console.log('おまけ2 配列の最初にstrawberryを追加');
fruits.unshift('strawberry');
console.log(fruits);

console.log('おまけ3 配列の最初と2つ目の要素を削除');
fruits.splice(0,2);
console.log(fruits);



// 選んだ商品の合計金額表示
console.log('選んだ商品の合計金額表示');
let total = 0;
const totalText = document.getElementById('js-total-text');

function addToTotal(price){
    total += price;
    totalText.textContent = total;
    
    console.log(totalText);          
    console.log(totalText.textContent); 
    console.dir(totalText); 
}



