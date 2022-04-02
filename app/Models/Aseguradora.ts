import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aseguradora extends BaseModel {
  public static table = 'aseguradoras'

  @column({ isPrimary: true })
  public id_aseguradora: number

  @column()
  public nombre: string

  @column()
  public cotizacion: number

  @column()
  public descripcion: string
}
