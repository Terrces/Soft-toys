//Я знаю что этот код говно но у меня не было времени думать как реализовать
//это более правильно так как дедлайны ☠

let ProductFetch = await fetch("/Data.json");
let Product = await ProductFetch.json()

let cartName = [];
let cartImage = [];
let cartPrice = [];

// console.log(PatchNotes.Changes[0]);
for(let i = 0; i < Product.Name.length;i++){
    let Container = document.createElement("div");
    Container.classList = "Product"
    let BuyBTN = document.createElement("button");
    let name = document.createElement("text");
    let pcontainer = document.createElement("div")
    let ptext = document.createElement("text");
    let price = document.createElement("text");

    Container.style.cssText = `background-image:url('${Product.Image[i]}');`
    let textStyle = "color:white;filter: drop-shadow(0px 0px 2px black);"
    name.textContent = Product.Name[i];
    name.style.cssText = textStyle;
    ptext.style.cssText = textStyle;
    price.style.cssText = textStyle;
    ptext.textContent = "Цена: ";
    price.textContent = Product.Price[i];
    BuyBTN.textContent = "В корзину";
    BuyBTN.addEventListener("click",() =>{
        cartName.push(name.textContent);
        cartImage.push(`${Product.Image[i]}`);
        cartPrice.push(price.textContent);
        localStorage.setItem("cartName",JSON.stringify(cartName))
        localStorage.setItem("cartImage",JSON.stringify(cartImage))
        localStorage.setItem("cartPrice",JSON.stringify(cartPrice))
    })
    document.getElementById("MainContainer").prepend(Container);
    pcontainer.append(ptext,price)
    Container.append(name,pcontainer,BuyBTN);
}