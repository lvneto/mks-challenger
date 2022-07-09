import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column()
  description: string;

  @Column()
  views: string;

  @Column()
  isPublished: string;
}
