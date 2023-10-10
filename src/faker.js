import { faker } from '@faker-js/faker';

function generateProduct() {
  const productId=faker.string.uuid();
  const productName = faker.commerce.productName();
  const productPrice = faker.commerce.price({min:100,max:1500});
  const productImage = faker.image.url({width:240,height:320});
  const productRating = Math.floor((Math.random() * 5)+1);

  return {
    id:productId,
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
