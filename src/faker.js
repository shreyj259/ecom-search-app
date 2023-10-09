import { faker } from '@faker-js/faker';

function generateProduct() {
  const productName = faker.commerce.productName();
  const productPrice = faker.commerce.price();
  const productImage = faker.image.url({width:120,height:170});
  const productRating = parseFloat((Math.random() * 5).toFixed(1));

  return {
    name: productName,
    price: parseFloat(productPrice),
    image: productImage,
    rating: productRating,
    liked:false
  };
}


function generateProductArray(numProducts) {
  const products = [];

  for (let i = 0; i < numProducts; i++) {
    products.push(generateProduct());
  }

  return products;
}


const numProducts = 100 ;
export const fakeProducts = generateProductArray(numProducts);
