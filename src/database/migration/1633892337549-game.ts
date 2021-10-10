import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class game1633892337549 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'games',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'file_url',
            type: 'varchar',
          },
          {
            name: 'companyId',
            type: 'int',
            isUnique: false,
          },
        ],
        foreignKeys: [
          {
            referencedTableName: 'company',
            onDelete: 'ON DELETE',
            referencedColumnNames: ['id'],
            columnNames: ['companyId'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('games');
  }
}
