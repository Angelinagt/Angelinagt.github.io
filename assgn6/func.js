let productName = "Original Cinnamon Roll";
let icingType = "Sugar-milk";
let qty = 1;
let image = "bittenroll";
let price = 1.00;

function jsDropdown(imgid,selectedValue){

    let selectedValueIndex = parseInt(selectedValue);

    let imagesArray = ["bittenroll", "two-buns", "chocolateicingroll", "chocolateroll"];
    let icingTypes = ["Sugar-milk", "Vanilla-milk", "Double-chocolate", "None"];

    icingType = icingTypes[selectedValueIndex];
    image = imagesArray[selectedValueIndex];
    
    document.getElementById(imgid).src = "images/" + imagesArray[selectedValueIndex] + ".jpg";

}

function jsQuantdown(quantity){

    qty = parseInt(quantity);

    document.getElementById("total").innerText = "$"+ quantity + ".00";

}
 
function addToCart(){

    //To Do:
        //Get the quantity of the item
        //Get the icing type
        //Get the product image
        //Price
    // console.log("RETRIEVED CART FROM LOCAL STORAGE");
    var currentCart = JSON.parse(localStorage.getItem("cart"));

    if (currentCart == null) {
        currentCart = [];
    }

    // console.log(currentCart);
    
    var newItem = {
        productName: "Original Cinnamon Roll",
        icing: icingType,
        quantity: qty,
        img: image,
        unitPrice: price
    }
      
    // console.log("");
    // console.log("");
    // console.log("ADDING NEW ITEM");
    currentCart.push(newItem);
    
    // console.log(currentCart);

    var totalQuantity = 0;

    for (let item of currentCart) {

        //totalQuantity = totalQuantity + item.quantity;
        totalQuantity += item.quantity;


    }

    // console.log("total quantity");
    // console.log(totalQuantity);

    localStorage.setItem("cart", JSON.stringify(currentCart));

    document.getElementById("cartvalue").innerText = "Cart (" + totalQuantity + ")";

}
