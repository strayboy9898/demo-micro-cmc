import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StorageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    productsAvailable: number;

    @Column({nullable: true})
    desc: string;
}