import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pacientes extends BaseSchema {
  protected tableName = 'pacientes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_paciente').primary()
      table.string('nombre').notNullable()
      table.integer('nss', 16).notNullable()
      table.string('telefono')
      table.integer('edad').notNullable()
      table.string('sexo')
      table.integer('aseguradora').unsigned().references('id_aseguradora').inTable('aseguradoras').onDelete('CASCADE').notNullable()
      table.integer('usuario').unsigned().references('id').inTable('users').onDelete('CASCADE').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
