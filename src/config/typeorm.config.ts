import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'test',
  //   autoLoadEntities: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
