import { DataSource } from 'typeorm';
import { CreateCoursesTable1690302376412 } from './migrations/1690302376412-CreateCoursesTable';
import { CreateTagsTable1690302419846 } from './migrations/1690302419846-CreateTagsTable';
import { CreateCoursesTagsTable1690303624493 } from './migrations/1690303624493-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1690303789280 } from './migrations/1690303789280-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1690304003648 } from './migrations/1690304003648-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCoursesTable1690302376412,
    CreateTagsTable1690302419846,
    CreateCoursesTagsTable1690303624493,
    AddCoursesIdToCoursesTagsTable1690303789280,
    AddTagsIdToCoursesTagsTable1690304003648,
  ],
});
