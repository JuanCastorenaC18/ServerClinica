import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Medico extends BaseModel {
  public static table = 'medicos'

  @column({ isPrimary: true })
  public id_medico: number

  @column()
  public nombre: string

  @column()
  public telefono: number

  @column()
  public edad: number

  @column()
  public sexo: string

  @column()
  public especialidad: number

  @column()
  public usuario: number
}
