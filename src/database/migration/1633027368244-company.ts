import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class company1633027368244 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company');
  }
}
