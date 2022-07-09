import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  views: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  published: Date;
}
