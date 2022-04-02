import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Tratamiento extends BaseModel {
  public static table = 'tratamiento'

  @column({ isPrimary: true })
  public id_tratamiento: number

  @column()
  public medicamento: string

  @column()
  public indicaciones: string

  @column()
  public consulta: number
}
