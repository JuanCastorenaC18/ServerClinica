/* eslint-disable prettier/prettier */
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clinicas extends BaseSchema {
  protected tableName = 'clinicas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cli').primary()
      table.string('nombre').notNullable()
      table.string('telefono').notNullable()
      table.string('direccion').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}