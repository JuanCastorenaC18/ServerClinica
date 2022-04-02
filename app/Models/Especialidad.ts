import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Especialidad extends BaseModel {
  public static table = 'especialidads'

  @column({ isPrimary: true })
  public id_especialidad: number

  @column()
  public nombre: string
}
