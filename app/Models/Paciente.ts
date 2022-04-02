import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Paciente extends BaseModel {
  public static table = 'pacientes'

  @column({ isPrimary: true })
  public id_paciente: number

  @column()
  public nombre: string

  @column()
  public nss: number

  @column()
  public telefono: number

  @column()
  public edad: number

  @column()
  public sexo: string

  @column()
  public aseguradora: number

  @column()
  public usuario: number
}
