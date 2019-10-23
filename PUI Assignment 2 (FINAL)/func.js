function jsDropdown(imgid,newimg){
    document.getElementById(imgid).src = "images/" + newimg + ".jpg";

}

function jsQuantdown(quantity){
    document.getElementById("total").innerText = "$"+ quantity + ".00";

}
 
function addToCart(){
    document.getElementById("cartvalue").innerText = "Cart (" + quantity.value + ")";

}
