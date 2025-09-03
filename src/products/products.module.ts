import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity'; // Importe a entidade ProductEntity

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])], // Registra a entidade no módulo
  controllers: [ProductsController],
  providers: [ProductsService]
})

export class ProductsModule {} 