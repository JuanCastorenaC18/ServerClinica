import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Rol extends BaseModel {
  public static table = 'rols'

  @column({ isPrimary: true })
  public id_rol: number

  @column()
  public nombre: string
}
