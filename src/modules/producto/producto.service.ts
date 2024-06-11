import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {

  constructor (@InjectRepository(Producto) private productoRepository: Repository <Producto>){}

  create(createProductoDto: CreateProductoDto) {
    return this.productoRepository.save(createProductoDto);
  }

  async findAll() {
    return this.productoRepository.find();
  }

  findOne(id: number) {
    return this.productoRepository.findOne({
      where:{
        id:id
      }
    });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
