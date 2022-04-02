/* eslint-disable prettier/prettier */
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Consultas extends BaseSchema {
  protected tableName = 'consultas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_consulta').primary()
      table.string('sintomas').notNullable()
      table.string('diagnostico').notNullable()
      table.integer('cita').unsigned().references('id_cita').inTable('citas').onDelete('CASCADE').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
