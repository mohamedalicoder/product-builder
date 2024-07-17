import { faker } from '@faker-js/faker';
import { IProduct } from '../interfaces';

// Generate a product

const PRODUCT_LENGTH = 20;
export const fakeProductList: IProduct[] = Array.from(
  { length: PRODUCT_LENGTH },
  () => ({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: +faker.commerce.price(),
    imgURL: faker.image.urlPicsumPhotos(),
    category: faker.commerce.department(),
    
  }),
);