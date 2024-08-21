let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "https://flyingcart.pk/cdn/shop/files/WHITEFRONT.jpg?v=1705320206&width=1946",
      },
      {
        productName: "Cargo Pants",
        category: "Bottomwear",
        price: "49",
        image: "https://media.istockphoto.com/id/90402750/photo/mens-cargo-pants-stone-colored-on-white-background.jpg?s=612x612&w=0&k=20&c=hghK-tKuSWXmq15RDOimcApy9thyJeT1PnKsNRovsQM=",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png",
      },
      {
        productName: "Casual Shirt",
        category: "Topwear",
        price: "29",
        image: "https://i5.walmartimages.com/seo/Penkiiy-Men-s-Dress-Shirts-Solid-Long-Sleeve-Stretch-Wrinkle-Free-Formal-Shirt-Business-Casual-Button-Down-Shirts_eba97382-2146-41b2-b3ef-80788aff69c9.b8f2987b77518128d24332aa7a91c2d7.jpeg",
      },
      {
        productName: "Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "https://5.imimg.com/data5/TC/AG/MY-8314359/men-s-pure-leather-jacket-500x500.png",
      },
      {
        productName: "Men casual Trouser",
        category: "Bottomwear",
        price: "89",
        image: "https://ae01.alicdn.com/kf/S48f6d04926384140be0a05943562acdeQ/2023-Spring-Autumn-New-Casual-Pants-Men-High-Quality-Loose-Trousers-Male-Solid-Color-Comfortable-Cotton.png",
      },
      {
        productName: "Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "https://i.ebayimg.com/images/g/8wcAAOSw9FBhiUnP/s-l1200.jpg",
      },
      {
        productName: "Jeans",
        category: "Bottomwear",
        price: "49",
        image: "https://t3.ftcdn.net/jpg/02/62/60/96/360_F_262609650_4PKM4OYULWGkrRrM2axh3XgtjYm7z6dt.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    
    let card = document.createElement("div");

    card.classList.add("card", i.category, "hide");
    
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    let container = document.createElement("div");
    container.classList.add("container");
    
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
   
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
     
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
   
    let elements = document.querySelectorAll(".card");
  
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };




//   for animatons


function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
  
    elements.forEach((element) => {
      element.classList.add("hide", "animate__animated", "animate__fadeOut");
      if (value == "all") {
        setTimeout(() => {
          element.classList.remove("hide", "animate__fadeOut");
          element.classList.add("animate__fadeIn");
        }, 100);
      } else {
        if (element.classList.contains(value)) {
          setTimeout(() => {
            element.classList.remove("hide", "animate__fadeOut");
            element.classList.add("animate__fadeIn");
          }, 100);
        }
      }
    });
  }
  
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {
      cards[index].classList.add("hide", "animate__animated", "animate__fadeOut");
      if (element.innerText.includes(searchInput.toUpperCase())) {
        setTimeout(() => {
          cards[index].classList.remove("hide", "animate__fadeOut");
          cards[index].classList.add("animate__fadeIn");
        }, 100);
      }
    });
  });
  
  window.onload = () => {
    filterProduct("all");
  };
  