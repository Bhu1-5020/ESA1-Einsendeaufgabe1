var menu = [
    { name: "Cappuccino", price: 5.99, category: "coffee" },
    { name: "Cafe Latte", price: 4.50, category: "coffee" },
    { name: "Espresso", price: 4.99, category: "coffee" },
    { name: "Cinnamon Coffee", price: 5.99, category: "coffee" },
    { name: "Macchiato", price: 6.99, category: "coffee" },
    { name: "Cheesecake", price: 7.50, category: "dessert" },
    { name: "Brownie", price: 4.50, category: "dessert" },
    { name: "Strawberry", price: 6.50, category: "dessert" },
    { name: "Green-tea", price: 4.50, category: "tea" },
    { name: "Black-tea", price: 4.50, category: "tea" },
    { name: "Lemon-tea", price: 4.50, category: "tea" }
];
function listOfMenu(category) {
    var ul = document.getElementById(category);
    var filterByCategory = menu.filter(function (items) { return items.category === category; });
    filterByCategory.forEach(function (items) {
        var li = document.createElement("li");
        li.textContent = "".concat(items.name, " -- ").concat(items.price, " Euro");
        if (ul) {
            ul.appendChild(li);
        }
    });
    return filterByCategory;
}
listOfMenu("coffee");
listOfMenu("dessert");
listOfMenu("tea");
