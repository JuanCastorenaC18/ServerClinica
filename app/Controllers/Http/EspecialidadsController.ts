import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Especialidad from 'App/Models/Especialidad'

export default class EspecialidadsController {
  public async index({ response }: HttpContextContract) {
    try {
      const especialidad = await Especialidad.all()
      return especialidad
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async create({}: HttpContextContract) {
  }

  public async store({ request, response }: HttpContextContract) {
    const especialidad = new Especialidad()
    const nombre = request.input('nombre')
    try {
      especialidad.nombre = nombre
      await especialidad.save()
      return response.status(200)
    } catch {
      return response.badRequest('Error al crear la especialidad')
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const nombre = request.input('nombre')
    try {
      const especialidad = await Especialidad.findOrFail(params.id)
      especialidad.nombre = nombre
      await especialidad.save()
      return response.status(200)
    } catch {
      response.badRequest('Error al actualizar la especialidad')
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const especialidad = await Especialidad.findOrFail(params.id)
      await especialidad.delete()
      return response.status(200)
    } catch {
      response.badRequest('Error al borrar la especialidad')
    }
  }
}
