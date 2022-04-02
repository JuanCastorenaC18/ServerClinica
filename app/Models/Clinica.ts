import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Clinica extends BaseModel {
  public static table = 'clinicas'

  @column({ isPrimary: true })
  public id_cli: number

  @column()
  public nombre: string

  @column()
  public telefono: string

  @column()
  public direccion: string
}
