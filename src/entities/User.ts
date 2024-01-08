import { Entity, PrimaryGeneratedColumn, Column  } from 'typeorm';

export class User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
}