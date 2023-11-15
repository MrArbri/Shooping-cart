
const fruits = [{

    "name": "ORANGE",
    "price": "3.85",
    "image": "https://cdn.pixabay.com/photo/2017/01/20/15/12/oranges-1995079_1280.jpg",
    "qtty": 1
},{

    "name": "FIGS",
    "price": "2.55",
    "image": "https://cdn.pixabay.com/photo/2016/08/25/20/11/figs-1620590_1280.jpg",
    "qtty": 1
},{

    "name": "APPLE",
    "price": "2.99",
    "image": "https://cdn.pixabay.com/photo/2015/03/06/13/36/apples-661670_1280.jpg",
    "qtty": 1
},{

    "name": "BANANA",
    "price": "1.99",
    "image": "https://cdn.pixabay.com/photo/2023/03/03/19/38/banana-7828351_1280.jpg",
    "qtty": 1
}]


fruits.forEach(function(Val){
    document.getElementById("result").innerHTML +=`
    <div class="container">
        <div><img src="${Val.image}" width="200" height="160"></div>
        <p>${Val.name}</p>
        <p>${Val.price}€</p>
        <button class="btn btn-primary myCart">Add to cart</button>
    </div>
    `;
})

let btns = document.querySelectorAll(".myCart");
let cart = [];

btns.forEach(function(btn, i){
    btn.addEventListener("click",function(){
        addToCart(i);
})
})

function addToCart(i){
   if(cart.find((item) => item.name == fruits [i].name)){
    fruits[i].qtty++;
   }else{
    cart.push(fruits[i]);
   }
createCartInHTML();
calcTotal();
}

// Button function plus

function plusQtty(i){
    cart[i].qtty++;
    document.querySelectorAll(".qtty")[i].innerText = cart[i].qtty;
}

// Button function minus

function minusQtty(i){
    if (cart[i].qtty == 1){
        cart.splice(i, 1);
    }else{
    cart[i].qtty--;

    }

    // document.querySelectorAll(".qtty")[i].innerText = cart[i].qtty;
}

// Button function remove item 

function removeItem(i){
    cart[i].qtty = 1;
    cart.splice(i, 1);
}

// Cart function

function createCartInHTML(){
    document.getElementById("cart").innerHTML = "";

    cart.forEach(function(Val){
        document.getElementById("cart").innerHTML += `
        <tr>
            <td>${Val.name}</td> 
            <td><div><img src="${Val.image}" width="100" height="60"></div></td>
            <td><button class="btn btn-primary minus"> - </button></td>
            <td><div class="qtty">${Val.qtty}</div></td> 
            <td><button class="btn btn-primary plus"> + </button></td>
            <td><div>${Val.price}€</div></td>
            <td><button class="btn btn-primary close"> x </button></td>
        </tr>
        `;
    })

        let plusBtns = document.querySelectorAll(".plus");

        plusBtns.forEach((plusBtn,i) => {
            plusBtn.addEventListener("click",function(){
                plusQtty(i);
                calcTotal();
        })
    });

        let minusBtns = document.querySelectorAll(".minus");

        minusBtns.forEach(function(minusBtn,i){
            minusBtn.addEventListener("click", function(){
                minusQtty(i);
                calcTotal();
                createCartInHTML();
        })
    })

        let closeBtns = document.querySelectorAll(".close");

        closeBtns.forEach(function(closeBtn,i){
            closeBtn.addEventListener("click", function(){
                removeItem(i);
                calcTotal();
                createCartInHTML();
            })
           
        })
}

// Calculating total

function calcTotal(){
    let total = 0;

    cart.forEach(function(fruit){
        total = total + (fruit.price * fruit.qtty);
    })
    document.getElementById("total").innerHTML = 
        `<div class="border border-black p-3 m-3 fw-bold">
        Total: ${ total.toFixed(2)}€</div>`;
}

/* <div class="flex">
<div><img src="${Val.image}" width="100" height="60"></div>
<div>${Val.price}€</div>
<button class="btn btn-primary minus"> - </button>
<div class="qtty">${Val.qtty}</div>
<button class="btn btn-primary plus"> + </button>
<div>${Val.color}</div>
<button class="btn btn-primary close"> x </button>
</div> */