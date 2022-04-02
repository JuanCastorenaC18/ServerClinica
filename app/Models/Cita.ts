import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cita extends BaseModel {
  static save() {
      throw new Error("Method not implemented.")
  }
  public static table = 'citas'

  @column({ isPrimary: true })
  public id_cita: number

  @column()
  public fecha: string

  /*static formatDates(field, values){
    if(field == 'fecha'){
      return values.format('DD-MM-YYYY')
    }
  }*/

  @column()
  public hora: string

  @column()
  public medico: number

  @column()
  public paciente: number

  @column()
  public clinica: number
}
