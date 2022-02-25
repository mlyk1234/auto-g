import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { Car, CarDocument } from '../schemas/car.schema';
import { UpdateRecordDto } from './dto/update-record.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>
    ) { }

  async create(createRecordDto: CreateRecordDto): Promise<Car>{
    const createdCar = new this.carModel(createRecordDto);
    return createdCar.save();
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findOne(sku: string) {
    return this.carModel.findOne({ sku });  
    // return `This action returns a #${id} record`;
  }

  async update(sku: string, updateRecordDto: UpdateRecordDto) {
    return this.carModel.updateOne({ sku }, {$set: { ...updateRecordDto}})
    // return `This action updates a #${id} record`;
  }

  async remove(sku: string) {
    return this.carModel.deleteOne({ sku });
    // return `This action removes a #${id} record`;
  }
}
