// ================= CART =================

let cart = [];


// Add product to cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    openCart();
}


// Update cart
function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const whatsappOrder = document.getElementById("whatsappOrder");

    cartCount.textContent = cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "Rs. 0";

        whatsappOrder.href = "#";

        return;
    }


    let total = 0;

    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        total += item.price;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div>
                <h4>${item.name}</h4>
                <p>Rs. ${item.price}</p>
            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        `;

        cartItems.appendChild(cartItem);
    });


    cartTotal.textContent = "Rs. " + total;


    // WhatsApp order message

    let message =
        "Assalamualaikum KHAN'S WAFFLES!%0A%0A" +
        "I want to place an order:%0A";


    cart.forEach((item, index) => {

        message +=
            `${index + 1}. ${item.name} - Rs. ${item.price}%0A`;

    });


    message +=
        `%0ATotal: Rs. ${total}%0A%0A` +
        "Please confirm my order.";


    whatsappOrder.href =
        "https://wa.me/923282235570?text=" + message;
}


// Remove item
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// Open cart
function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("active");

    document
        .getElementById("cartOverlay")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


// Close cart
function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("active");

    document
        .getElementById("cartOverlay")
        .classList.remove("active");

    document.body.style.overflow = "";
}


// ================= TOP BUTTON =================

window.addEventListener("scroll", function () {

    const topBtn = document.getElementById("topBtn");

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";
        topBtn.style.alignItems = "center";
        topBtn.style.justifyContent = "center";

    } else {

        topBtn.style.display = "none";

    }

});


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ================= CLOSE CART WITH ESC =================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeCart();

    }

});


// ================= DROPDOWN MOBILE =================

const dropdownButton = document.querySelector(".drop-btn");
const dropdown = document.querySelector(".dropdown");

if (dropdownButton) {

    dropdownButton.addEventListener("click", function (event) {

        if (window.innerWidth <= 600) {

            event.preventDefault();

            dropdown.classList.toggle("mobile-open");

            const menu =
                dropdown.querySelector(".dropdown-menu");

            if (dropdown.classList.contains("mobile-open")) {

                menu.style.opacity = "1";
                menu.style.visibility = "visible";
                menu.style.transform = "translateY(0)";

            } else {

                menu.style.opacity = "";
                menu.style.visibility = "";
                menu.style.transform = "";

            }
        }

    });

}


// ================= CURRENT YEAR =================

console.log("KHAN'S WAFFLES website loaded successfully!");