import { Body, Controller, Get, Post } from '@nestjs/common';
import { UnitsService } from './units.service';
import { Unit } from './entities/unit.entity';

@Controller('units')
export class UnitsController {

    constructor(private readonly unitsService: UnitsService) {
    }

    @Get()
    findAll(): Promise<Unit[]> {
        return this.unitsService.findAll();
    }

    @Post()
    create(@Body() unit: Unit): Promise<Unit[]> {
        return this.unitsService.create(unit);
    }
}
