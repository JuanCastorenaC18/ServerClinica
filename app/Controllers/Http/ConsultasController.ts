import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Consulta from 'App/Models/Consulta'

export default class ConsultasController {
  public async index({ response }: HttpContextContract) {
    try {
      const consultas = Database.query().from('consultas')
      .innerJoin('citas','consultas.cita', 'citas.id_cita')
      .select('consultas.id_consulta','consultas.sintomas','consultas.diagnostico','consultas.cita')
      return consultas
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async create({}: HttpContextContract) {
    
  }

  public async store({ request, response }: HttpContextContract) {
    const consultas = new Consulta()
    const sintomas = request.input('sintomas')
    const diagnostico = request.input('diagnostico')
    const cita = request.input('cita')
    try {
      consultas.sintomas = sintomas
      consultas.diagnostico = diagnostico
      consultas.cita = cita
      await consultas.save()
      return response.status(200)
    } catch {
      return response.badRequest('error al crear la consulta')
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const sintomas = request.input('sintomas')
    const diagnostico = request.input('diagnostico')
    const cita = request.input('cita')
    try {
      const consultas = await Consulta.findOrFail(params.id)
      consultas.sintomas = sintomas
      consultas.diagnostico = diagnostico
      consultas.cita = cita
      await consultas.save()
      return response.status(200)
    } catch {
      response.badRequest('Error al actualizar la consulta')
    }
  }

  public async destroy({ params, request, response }: HttpContextContract) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    try {
      const consultas = await Consulta.findOrFail(params.id)
      await consultas.delete()
      return response.status(200)
    } catch {
      response.badRequest('Error al borrar la consulta')
    }
  }
}
