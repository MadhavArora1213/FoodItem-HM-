const product = [
    {
      id: 0,
      foodItem: "Fav_food",
      category: "Pizza",
      price: 250,
      quantity: 20,
    },
    {
      id: 1,
      foodItem: "Oreo Shake",
      category: "Milkshake",
      price: 40,
      quantity: 50,
    },
    {
      id: 2,
      foodItem: "Vanilla Shake",
      category: "Milkshake",
      price: 50,
      quantity: 50,
    },
    {
      id: 3,
      foodItem: "Italian Pizza",
      category: "Pizza",
      price: 550,
      quantity: 50,
    },
    {
      id: 4,
      foodItem: "Paneer Korma",
      category: "Burger",
      price: 40,
      quantity: 9,
    },
    {
      id: 5,
      foodItem: "Cheese Pizza",
      category: "Pizza",
      price: 250,
      quantity: 100,
    },
    {
      id: 6,
      foodItem: "Bear",
      category: "Dukh_di_dwai",
      price: 80,
      quantity: 100,
    },
    {
      id: 7,
      foodItem: "Veg_Noodles",
      category: "Noodles",
      price: 70,
      quantity: 8,
    },
    {
      id: 8,
      foodItem: "Limca",
      category: "Cold_drink",
      price: 80,
      quantity: 100,
    },
    {
      id: 9,
      foodItem: "Royal_Stag",
      category: "Dukh_di_Dwai",
      price: 400,
      quantity: 500,
    },
    {
      id: 10,
      foodItem: "Paneer pakoda",
      category: "fast food",
      price: 300,
      quantity: 25,
    },
    {
      id: 11,
      foodItem: "Gobi pakoda",
      category: "fast food",
      price: 200,
      quantity: 20,
    },
  ];
  
  // Filter out products with quantity < 10
  const filteredProducts = product.filter(item => item.quantity >= 10);
  
  const categories = [
    ...new Set(
      filteredProducts.map((item) => {
        return item;
      })
    ),
  ];
  
  document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
      return item.category.toLowerCase().includes(searchData);
    });
    displayItem(filteredData);
  });
  
  const displayItem = (items) => {
    document.getElementById("root").innerHTML = items
      .map((item) => {
        var { foodItem, category, price, quantity } = item;
        return `<div class='box'>
                    
                    <div class='bottom'>
                        <p>${foodItem}</p>
                        <p>${category}</p>
                        <h2> ${price}.00</h2>
                        <p>${quantity}</p>
                    </div>
                </div>`;
      })
      .join("");
  };
  displayItem(categories);
  
  for (let i = 0; i < product.length; i++) {
    console.log(filteredProducts[i]);
    console.log(filteredProducts[i].foodItem);
    console.log(`   The foodItem is ${filteredProducts[i].foodItem} and its price is ${filteredProducts[i].price}`
   
    );
  }