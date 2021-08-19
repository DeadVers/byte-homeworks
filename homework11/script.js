const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];


const productCard = (arr) => {
    cardContainer =  arr.forEach((object) => {
            container = document.createElement('div');
            
            const htmlCode = 
            `
            <h1>${object.name}</h1>
            <h3>${object.brand}</h3>
            <ul>${object.properties.map((prop) => `<li>${prop}</li>`).join('')}
            </ul>
            `
            document.body.append(container);
            container.innerHTML = htmlCode;
    })
        console.log(cardContainer)
        return cardContainer;
}
    

productCard(products);






    







