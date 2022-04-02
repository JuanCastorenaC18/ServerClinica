import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rol from 'App/Models/Rol'

export default class RolsController {
  public async index({ response }: HttpContextContract) {
    try {
      const rol = await Rol.all()
      return rol
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async create({}: HttpContextContract) {
    
  }

  public async store({ request, response }: HttpContextContract) {
    const rol = new Rol()
    const nombre = request.input('nombre')
    try {
      rol.nombre = nombre
      await rol.save()
      return response.status(200)
    } catch {
      return response.badRequest('Fallo al crear')
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const nombre = request.input('nombre')
    try {
      const rol = await Rol.findOrFail(params.id)
      rol.nombre = nombre
      await rol.save()
      return response.status(200)
    } catch {
      response.badRequest('Fallo al actualizar')
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const rol = await Rol.findOrFail(params.id)
      await rol.delete()
      return response.status(200)
    } catch {
      response.badRequest('Error al borrar')
    }
  }
}
