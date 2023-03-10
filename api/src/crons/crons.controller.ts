import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CronsService } from './crons.service';
import { CreateCronDto } from './dto/create-cron.dto';
import { UpdateCronDto } from './dto/update-cron.dto';

@Controller('crons')
export class CronsController {
  constructor(private readonly cronsService: CronsService) {}

  @Post()
  create(@Body() createCronDto: CreateCronDto) {
    return this.cronsService.create(createCronDto);
  }

  @Get()
  findAll() {
    return this.cronsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cronsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCronDto: UpdateCronDto) {
    return this.cronsService.update(id, updateCronDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.cronsService.remove(id);
    return;
  }
}
