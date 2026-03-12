import productModel from "../models/productModel.js";

const showProducts = async (req,res) => {
    const products = [
      { name: "Product 1", desc: "Description 1", price: 10, imageUrl: "/images/1.PNG" },
      { name: "Product 2", desc: "Description 2", price: 20, imageUrl: "/images/2.PNG" },
      { name: "Product 3", desc: "Description 3", price: 30, imageUrl: "/images/3.PNG" }
    ];
    // res.render("store/products",{products})
    res.json(products)
}

export {showProducts}