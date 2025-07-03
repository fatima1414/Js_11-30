const productInfo = document.querySelector("#productInfo");

 let productList = JSON.parse(localStorage.getItem("productList"));


productInfo.addEventListener('submit',(e) => {
 
  e.preventDefault();

  const category = document.querySelector("#category").value;
  const p_name = document.querySelector("#p_name").value;
  const p_price = document.querySelector("#p_price").value;
  const p_url = document.querySelector("#p_url").value;

  const arr = productList || [];
  const id = arr.length + 1;

  const newProduct = {
    id,
    category,
    p_name,
    p_price,
    p_url,
  };
  arr.push(newProduct);
  localStorage.setItem("productList", JSON.stringify(arr));
  location.reload();
  
});

function show() {
  let output = "";
  productList?.forEach((product) => {
    output += `
        <div class= " col-xl-3  col-lg-4  col-md-6 mt-4">
        <div class= "card border-0 shadow">
        <img src ="${product.p_url}"alt="" height = "200">
        <div class="card-body">
        <h4>${product.p_name}</h4>
        <ul>
        <li>catergory :- ${product.category}</li>
        <li>price:- ${product.p_price}</li>
        </ul>
        <button onclick="AddToCart(${product.id})" class="btn btn-info"">Add to Cart</button>
        <button onclick="trash(${product.id})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
         <button onclick="update(${product.id})" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button>
        </div>
        </div>
        </div>
        `;
  });
  document.querySelector("#showProduct").innerHTML = output;
}
show();

function AddToCart(id) {
  alert("product add to cart.......");

  const singleProduct = productList.find((product) => {
    return product.id === id;
  });

  ///////check cart exict or not
  let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

  //////check cart exict or not  base on id
  const singleCart = cartList.find((cart) => {
    return cart.id === id;
  });

  if (singleCart) {
    singleCart.count += 1;
  } else {
    const newcart = {
      ...singleProduct,
      count: 1,
    };

    cartList.push(newcart);
  }

  localStorage.setItem("cartList", JSON.stringify(cartList));
}

 ///////////// DELETE
function trash(id) {
  if (confirm("do you want to delete this product?")) {
    const filterProduct = productList.filter((product) => {
      return product.id !== id;
    });

    console.log(filterProduct);

    localStorage.setItem("productList", JSON.stringify(filterProduct));
    location.reload();

    show();
  }
}

// UPDATE BUTTON

function update(id) {
  alert("update card ............")
  document.querySelector("#Submit").style.display = "none";
  document.querySelector("#update").style.display = "block";

  // FIND USER FOR ONE
  const singleUser = productList.find((product) => {
    return product.id === id;
  });
  console.log(singleUser);

  let category = document.querySelector("#category");
  let p_name   = document.querySelector("#p_name");
  let p_price  = document.querySelector("#p_price");
  let p_url   = document.querySelector("#p_url");
  //  alert(id)

  
   category.value = singleUser. category;
   p_name.value = singleUser.p_name;
   p_price.value = singleUser.p_price;
   p_url.value = singleUser.p_url;

  // Update Button Click
  document.querySelector("#update").addEventListener("click", () => {
    alert("update data............");
    const newUser = {
      id,
      category:category.value,
       p_name: p_name.value,
      p_price: p_price.value,
      p_url:p_url.value,
    };
    console.log(newUser);

    // Save Updated User
    const index = productList.findIndex((product) => {
      return product.id === id;
    });
    productList[index] = newUser;
    localStorage.setItem("productList", JSON.stringify(productList));
    location.reload();
    show();
  });
}

function countCart(){
  const cartList = JSON.parse(localStorage.getItem('cartList'))
  document.querySelector('#cartCount').innerHTML = cartList.length
}
countCart()