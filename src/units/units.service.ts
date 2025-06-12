import { Injectable } from '@nestjs/common';
import { Unit } from './entities/unit.entity';

@Injectable()
export class UnitsService {

    private readonly units: Unit[];

    constructor() {
        this.units = [
            {
                id: 1,
                mac: '1234567890',
                sim: 1234567890,
                type: 'type1',
                location: 'location1',
                registration: 'registration1',
                status: 'status1'
            },
            {
                id: 2,
                mac: '2234567890',
                sim: 2234567890,
                type: 'type2',
                location: 'location2',
                registration: 'registration2',
                status: 'status2'
            },
            {
                id: 3,
                mac: '3234567890',
                sim: 3234567890,
                type: 'type3',
                location: 'location3',
                registration: 'registration3',
                status: 'status3'
            },
            {
                id: 4,
                mac: '4234567890',
                sim: 4234567890,
                type: 'type4',
                location: 'location4',
                registration: 'registration4',
                status: 'status4'
            },
            {
                id: 5,
                mac: '5234567890',
                sim: 5234567890,
                type: 'type5',
                location: 'location5',
                registration: 'registration5',
                status: 'status5'
            }
        ]
    }

    findAll(): Promise<Unit[]> {
        return Promise.resolve(this.units);
    }



    create(unit: Unit): Promise<Unit[]> {
        this.units.push(unit);
        return Promise.resolve(this.units);
    }
}
