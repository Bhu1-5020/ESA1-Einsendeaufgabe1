interface Menu {
   name: string; 
   price: number;
   category: "coffee" | "tea" | "dessert" ;
}

const menu: Menu [] = [
    {name:"Cappuccino" , price: 5.99 , category:"coffee" },
    {name:"Cafe Latte" , price: 4.50 , category:"coffee"},
    {name:"Espresso" , price:4.99 , category:"coffee"},
    {name:"Cinnamon Coffee" , price: 5.99 , category:"coffee"},
    {name:"Macchiato" , price: 6.99 , category:"coffee"},
    {name:"Cheesecake" , price:7.50, category:"dessert"},
    {name:"Brownie" , price:4.50 , category:"dessert"},
    {name:"Strawberry" , price: 6.50 , category:"dessert"},
    {name:"Green-tea" , price: 4.50 , category:"tea"},
    {name:"Black-tea" , price: 4.50 , category:"tea"},
    {name:"Lemon-tea" , price:4.50 , category:"tea"}
];

function listOfMenu(category: "tea" | "coffee" | "dessert"): Menu []{
    const ul = document.getElementById(category);
    const filterByCategory: Menu[] = menu.filter(items => items.category === category);

    filterByCategory.forEach(items =>{
       const li = document.createElement("li");
       li.textContent = `${items.name} -- ${items.price} Euro`;
       if(ul){
        ul.appendChild(li);
       }
    });

    return filterByCategory ; 
}

listOfMenu("coffee");
listOfMenu("dessert");
listOfMenu("tea");

function greetingMessage(time: number) : string{
    let text: string = "" ; 
    if(time < 12){
        text = "Good morning welcome to .." ; 
    }else if(time < 18){
        text = "Good afternoon welcome to..";
    }else{
        text = "Good Evening " ; 
    }
    const greeting = document.getElementById("greeting");
    if(greeting){
        greeting.textContent = `${text}`;
    }
    return text ;
}

const local = new Date();
const currentHour = local.getHours();
greetingMessage(currentHour);