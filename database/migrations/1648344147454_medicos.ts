import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medicos extends BaseSchema {
  protected tableName = 'medicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_medico').primary()
      table.string('nombre').notNullable()
      table.string('telefono').unique()
      table.integer('edad').notNullable()
      table.string('sexo')
      table.integer('especialidad').unsigned().references('id_especialidad').inTable('especialidads').onDelete('CASCADE').notNullable()
      table.integer('usuario').unsigned().references('id').inTable('users').onDelete('CASCADE').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
