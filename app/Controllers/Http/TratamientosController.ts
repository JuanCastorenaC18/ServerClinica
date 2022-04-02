import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Tratamiento from 'App/Models/Tratamiento'

export default class TratamientosController {
  public async index({ response }: HttpContextContract) {
    try {
      /*const tratamiento = await Database.query().from('tratamiento')
      .select('tratamiento.id_tratamiento','tratamiento.medicamento','tratamiento.indicaciones','tratamiento.consulta as numero de consulta')
      return tratamiento*/
      const tratamiento = await Tratamiento.all()
      return tratamiento
    } catch {
      response.badRequest('Error al mostrar')
    }
  }

  public async create({}: HttpContextContract) {
    
  }

  public async store({ request, response }: HttpContextContract) {
    const tratamiento = new Tratamiento()
    const medicamento = request.input('medicamento')
    const indicaciones = request.input('indicaciones')
    const consulta = request.input('consulta')
    try{
      tratamiento.medicamento = medicamento
      tratamiento.indicaciones = indicaciones
      tratamiento.consulta = consulta
      await tratamiento.save()
      return response.status(200)
    } catch {
      return response.badRequest('Error al crear el tratamiento')
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const medicamento = request.input('medicamento')
    const indicaciones = request.input('indicaciones')
    const consulta = request.input('consulta')
    try {
      const tratamiento = await Tratamiento.findOrFail(params.id)
      tratamiento.medicamento = medicamento
      tratamiento.indicaciones = indicaciones
      tratamiento.consulta = consulta
      await tratamiento.save()
      return response.status(200)
    } catch {
      response.badRequest('Error al actualizar')
    }
  }

  public async destroy({ params ,request, response }: HttpContextContract) {
    try {
      const tratamiento = await Tratamiento.findOrFail(params.id)
      await tratamiento.delete()
      return response.status(200)
    } catch {
      response.badRequest('Error al borrar')
    }
  }
}
