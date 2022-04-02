import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Medico from 'App/Models/Medico'

export default class MedicosController {
  public async index({ response }: HttpContextContract) {
    try {
      const medico = Database.query().from('medicos')
      .innerJoin('especialidads','especialidads.id_especialidad','medicos.especialidad')
      .innerJoin('users','users.id','medicos.usuario')
      .select('medicos.id_medico','medicos.nombre','medicos.telefono','medicos.edad','medicos.sexo','especialidads.nombre as especialidad','users.email')
      return medico
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async create({}: HttpContextContract) {
  }

  public async store({ request, response }: HttpContextContract) {
    const medico = new Medico()
    const nombre = request.input('nombre')
    const telefono = request.input('telefono')
    const edad = request.input('edad')
    const sexo = request.input('sexo')
    const especialidad = request.input('especialidad')
    const usuario = request.input('usuario')
    try {
      medico.nombre = nombre
      medico.telefono = telefono
      medico.edad = edad
      medico.sexo = sexo
      medico.especialidad = especialidad
      medico.usuario = usuario
      await medico.save()
      return response.status(200)
    } catch {
      return response.badRequest('Error al crear el medico')
    }
  }

  public async show({}: HttpContextContract) {
    
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const nombre = request.input('nombre')
    const telefono = request.input('telefono')
    const edad = request.input('edad')
    const sexo = request.input('sexo')
    const especialidad = request.input('especialidad')
    const usuario = request.input('usuario')
    try {
      const medico = await Medico.findOrFail(params.id)
      medico.nombre = nombre
      medico.telefono = telefono
      medico.edad = edad
      medico.sexo = sexo
      medico.especialidad = especialidad
      medico.usuario = usuario
      await medico.save()
      return response.status(200)
    } catch {
      response.badRequest('Error al actualizar el medico')
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const medico = await Medico.findOrFail(params.id)
      await medico.delete()
      return response.status(200)
    } catch {
      response.badRequest('Error al borrar')
    }
  }
}
