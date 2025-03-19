async function fetchMenu() 
{
    try 
    {
        const response = await fetch("menu.json");
        if (!response.ok) 
        {
            throw new Error("e ${response.status}");
        }

        const json = await response.json();
        console.log(json);

        //kalder menu-funktionen
        displayMenu(json.pizzas);
    } 

    catch (error) 
    {
        console.error(error.message);

        //document.getElementById("menu").innerHTML = "<p>Kunne ikke hente menuen</p>";
    }
}


function displayMenu(pizzas) 
{
    let menuContainer = document.getElementById("menu");

    menuContainer.innerHTML = "";

    pizzas.forEach(pizza => 
    
    {
        let pizzaItem = document.createElement("div");

        pizzaItem.classList.add("pizza");

        pizzaItem.innerHTML = `
            <h3>${pizza.name}</h3>
            <img src="${pizza.image}" alt="${pizza.name}" class="pizza-image">
            <p>${pizza.description}</p>
            <p>Pris: ${pizza.price} kr.</p>
        `;
        menuContainer.appendChild(pizzaItem);
    });
}


document.addEventListener("DOMContentLoaded", fetchMenu);