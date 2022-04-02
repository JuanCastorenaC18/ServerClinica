import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Rols extends BaseSchema {
  protected tableName = 'rols'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_rol').primary()
      table.string('nombre').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()*/
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
