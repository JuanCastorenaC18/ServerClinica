/* eslint-disable prettier/prettier */
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Citas extends BaseSchema {
  protected tableName = 'citas'
    static hora: any

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cita').primary()
      table.date('fecha').notNullable()
      table.time('hora').notNullable()
      table.integer('medico').unsigned().references('id_medico').inTable('medicos').onDelete('CASCADE').notNullable()
      table.integer('paciente').unsigned().references('id_paciente').inTable('pacientes').onDelete('CASCADE').notNullable()
      table.integer('clinica').unsigned().references('id_cli').inTable('clinicas').onDelete('CASCADE').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
