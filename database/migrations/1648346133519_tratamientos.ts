import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tratamientos extends BaseSchema {
  protected tableName = 'tratamiento'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_tratamiento').primary()
      table.string('medicamento')
      table.string('indicaciones')
      table.integer('consulta').unsigned().references('id_consulta').inTable('consultas').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}