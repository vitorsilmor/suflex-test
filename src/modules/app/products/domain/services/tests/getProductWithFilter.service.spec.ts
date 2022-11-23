import { Test } from '@nestjs/testing';
import { ProductRepository } from '../../../repositories/typeorm/product.repository';
import { GetProductsWithFilterService } from '../getProductsWithFilter.service';

let getProductsService: GetProductsWithFilterService;

const mockedData = [
  {
    id: 1,
    name: 'first product',
    days_to_expiration: 0,
  },
  {
    id: 2,
    name: 'second product',
    days_to_expiration: 1,
  },
  {
    id: 3,
    name: 'second product',
    days_to_expiration: 2,
  },
];

beforeEach(async () => {});

describe('GetProductWithFilterService', () => {
  it('should pass returning 3 products', async () => {
    const productRepository = {
      getAll: jest.fn().mockResolvedValue(mockedData),
    };

    const module = await Test.createTestingModule({
      providers: [
        GetProductsWithFilterService,
        {
          provide: ProductRepository,
          useValue: productRepository,
        },
      ],
    }).compile();

    getProductsService = module.get(GetProductsWithFilterService);

    const products = await getProductsService.handle({});
    expect(products.length).toEqual(3);
  });

  it('should fail throwing an exception', async () => {
    const productRepository = {
      getAll: jest.fn().mockImplementation(() => {
        throw new Error('some error');
      }),
    };

    const module = await Test.createTestingModule({
      providers: [
        GetProductsWithFilterService,
        {
          provide: ProductRepository,
          useValue: productRepository,
        },
      ],
    }).compile();

    getProductsService = module.get(GetProductsWithFilterService);

    try {
      await getProductsService.handle({});
    } catch (error) {
      expect(error.message).toEqual('GetProductError: some error');
    }
  });
});
