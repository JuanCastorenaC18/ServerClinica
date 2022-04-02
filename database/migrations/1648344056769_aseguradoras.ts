import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aseguradoras extends BaseSchema {
  protected tableName = 'aseguradoras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_aseguradora').primary()
      table.string('nombre').notNullable()
      table.float('cotizacion', 255, 2).notNullable()
      table.text('descripcion')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
