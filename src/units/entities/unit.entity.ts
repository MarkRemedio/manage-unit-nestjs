import { IsNumber, IsString } from "class-validator";

export class Unit {

    @IsNumber()
    id!: number;

    @IsString()
    mac!: string;

    @IsNumber()
    sim!: number;   

    @IsString()
    type!: string;

    @IsString()
    location!: string;

    @IsString()
    registration!: string;

    @IsString()
    status!: string;
}