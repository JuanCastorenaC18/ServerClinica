import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Clinica from 'App/Models/Clinica'

export default class ClinicasController {
  public async index({ response }: HttpContextContract) {
    try {
      const clinica = await Clinica.all()
      return clinica
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async create({}: HttpContextContract) {
    
  }

  public async store({ request, response }: HttpContextContract) {
    const clinica = new Clinica()
    const nombre = request.input('nombre')
    const telefono = request.input('telefono')
    const direccion = request.input('direccion')
    try {
      clinica.nombre = nombre
      clinica.telefono = telefono
      clinica.direccion = direccion
      await clinica.save()
      return response.status(200)
    } catch {
      return response.badRequest('clinica no registrada')
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const nombre = request.input('nombre')
    const telefono = request.input('telefono')
    const direccion = request.input('direccion')
    try {
      const clinica = await Clinica.findOrFail(params.id)
      clinica.nombre = nombre
      clinica.telefono = telefono
      clinica.direccion = direccion
      await clinica.save()
      return response.status(200)
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const clinica = await Clinica.findOrFail(params.id)
      await clinica.delete()
      return response.status(200)
    } catch {
      response.badRequest('Error al borrar la clinica')
    }
  }
}
