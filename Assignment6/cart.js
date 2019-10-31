

function displayCart() {
	let cart = JSON.parse(localStorage.getItem("cart"));

	let totalPrice = 0.00;
	let htmlString = ""

	for (let i = 0; i < cart.length; i++) {

		let item = cart[i];

		htmlString += `<div class="product-container">`
		htmlString += `<div class="product-cell"><div class="itempic"><img src="images/${item.img}-cart.jpg" alt="original roll" id="originalroll"></div></div>`
		htmlString += `<div class="product-cell"><div class="itemtext"><h3>ORIGINAL BUN</h3><p>BREAD: Plain <br> ICING: ${item.icing}</p><h3>$${item.unitPrice}  X  ${item.quantity}<br></div></div>`
		htmlString += `<div class="product-cell"><div class="itemremove" onclick="deleteItem(${i})"><br>REMOVE</h3></div></div>`
		htmlString += "</div>"

		//</div><div class="product-container-cell"><div class="itemtext"><h3>ORIGINAL BUN</h3><p>BREAD: Plain <br> ICING: ${item.icing}</p><h3>$${item.unitPrice} X  ${item.quantity}<br></div></div><div class="product-container-cell"></div></div>`
		totalPrice += (item.quantity * item.unitPrice);

	}

	document.getElementById("product-list").innerHTML = htmlString;

	document.getElementById("totalpp").innerHTML = `Total: $${totalPrice}`

}

function deleteItem(itemToDelete) {
	console.log(`Delete item: ${itemToDelete}`);
	let cart = JSON.parse(localStorage.getItem("cart"));

	cart.splice(itemToDelete, 1);

	localStorage.setItem("cart", JSON.stringify(cart));

	displayCart();
}

displayCart();