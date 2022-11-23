import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { GetProductsWithFilterService } from '../../domain/services/getProductsWithFilter.service';
import { ProductController } from '../product.controller';
import { ProductRepository } from '../../repositories/typeorm/product.repository';
import * as request from 'supertest';
import { IProduct } from '../../domain/interfaces/product.interface';

let app: INestApplication;
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

beforeEach(async () => {
  const productRepository = {
    getAll: jest.fn().mockResolvedValue(mockedData),
  };

  const module = await Test.createTestingModule({
    controllers: [ProductController],
    providers: [
      GetProductsWithFilterService,
      {
        provide: ProductRepository,
        useValue: productRepository,
      },
    ],
  }).compile();
  app = module.createNestApplication();

  await app.init();
});

describe('GET /products', () => {
  it('returns status 200 with products data', async () => {
    const result = await request(app.getHttpServer()).get('/products');

    expect(result.status).toEqual(200);
    expect(result.body.length).toEqual(3);

    let position = 0;

    for await (const product of result.body as Array<IProduct>) {
      expect(product.id).toEqual(mockedData[position].id);
      expect(product.name).toEqual(mockedData[position].name);
      expect(product.days_to_expiration).toEqual(
        mockedData[position].days_to_expiration,
      );

      position++;
    }
  });
});
