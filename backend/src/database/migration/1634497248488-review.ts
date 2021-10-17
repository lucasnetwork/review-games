import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class review1634497248488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reviews',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'review',
            type: 'varchar',
          },
          {
            name: 'userId',
            type: 'int',
            isUnique: false,
          },
          {
            name: 'gameId',
            type: 'int',
            isUnique: false,
          },
        ],
        foreignKeys: [
          {
            referencedTableName: 'games',
            onDelete: 'ON DELETE',
            referencedColumnNames: ['id'],
            columnNames: ['gameId'],
          },
          {
            referencedTableName: 'users',
            onDelete: 'ON DELETE',
            referencedColumnNames: ['id'],
            columnNames: ['userId'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
