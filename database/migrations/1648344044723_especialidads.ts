import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Especialidads extends BaseSchema {
  protected tableName = 'especialidads'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_especialidad').primary()
      table.string('nombre').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}