/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aseguradora from 'App/Models/Aseguradora'

export default class AseguradorasController {
  public async index({ response }: HttpContextContract) {
    try {
      const aeguradora = await Aseguradora.all()
      return aeguradora
    } catch {
      response.badRequest('Peticion nom cumplida')
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const aeguradora = new Aseguradora()
    const nombre = request.input('nombre')
    const cotizacion = request.input('cotizacion')
    const descripcion = request.input('descripcion')
    try {
      aeguradora.nombre = nombre
      aeguradora.cotizacion = cotizacion
      aeguradora.descripcion = descripcion
      await aeguradora.save()
      return response.status(200)
    } catch {
      return response.badRequest('Aseguradora no registrada')
    }
  }

  public async show({ response }: HttpContextContract) {
    try {
      const aeguradora = await Aseguradora.all()
      return aeguradora
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const nombre = request.input('nombre')
    const cotizacion = request.input('cotizacion')
    const descripcion = request.input('descripcion')
    try {
      const aseguradora = await Aseguradora.findOrFail(params.id)
      aseguradora.nombre = nombre
      aseguradora.cotizacion = cotizacion
      aseguradora.descripcion = descripcion
      await aseguradora.save()
      return response.status(200)
    } catch {
      response.badRequest('Aseguradora no actualizada')
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const aseguradora = await Aseguradora.findOrFail(params.id)
      await aseguradora.delete()
      return response.status(200)
    } catch {
      response.badRequest('Aseguradora no eliminada')
    }
  }
}
