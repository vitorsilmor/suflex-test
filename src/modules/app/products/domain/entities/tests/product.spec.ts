import { Product } from '../product.entity';

describe('ProductEntity', () => {
  it('ProductEntity - should be able to fill id, name and days_to_expiration properties', () => {
    const product = new Product();
    const mockedProduct = {
      id: 1,
      name: 'first product',
      days_to_expiration: 5,
    };

    product.id = mockedProduct.id;
    product.name = mockedProduct.name;
    product.days_to_expiration = mockedProduct.days_to_expiration;

    expect(product.id).toEqual(mockedProduct.id);
    expect(product.name).toEqual(mockedProduct.name);
    expect(product.days_to_expiration).toEqual(
      mockedProduct.days_to_expiration,
    );
  });
});
