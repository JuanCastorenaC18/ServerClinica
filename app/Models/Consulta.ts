import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Consulta extends BaseModel {
  public static table = 'consultas'

  @column({ isPrimary: true })
  public id_consulta: number

  @column()
  public sintomas: string

  @column()
  public diagnostico: string

  @column()
  public cita: number
}
