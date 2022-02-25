import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordsService.create(createRecordDto);
  }

  @Get()
  findAll() {
    return this.recordsService.findAll();
  }

  @Get(':sku')
  findOne(@Param('sku') name: string) {
    return this.recordsService.findOne(name);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.recordsService.findOne(+id);
  // }

  @Patch(':sku')
  update(@Param('sku') name: string, @Body() updateRecordDto: UpdateRecordDto) {
    return this.recordsService.update(name, updateRecordDto);
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRecordDto: UpdateRecordDto) {
  //   return this.recordsService.update(+id, updateRecordDto);
  // }

  @Delete(':sku')
  remove(@Param('sku') name: string) {
    return this.recordsService.remove(name);
    // return this.recordsService.remove(+id);
  }
}
