import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class FirstMigration1641701453628 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
                    {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("user");
    }

}
