import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Paciente from 'App/Models/Paciente'

export default class PacientesController {
  public async index({ response }: HttpContextContract) {
    try {
      /*const paciente = await Paciente.all()
      return paciente*/
      const paciente = Database.query().from('pacientes')
      .innerJoin('aseguradoras','aseguradoras.id_aseguradora','pacientes.aseguradora')
      .innerJoin('users','users.id','pacientes.usuario')
      .select('pacientes.id_paciente','pacientes.nombre','pacientes.nss','pacientes.telefono','pacientes.edad','pacientes.sexo','aseguradoras.nombre as aseguradora','users.email')
      return paciente
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async create({}: HttpContextContract) { 
  }

  public async store({ request, response }: HttpContextContract) {
    const paciente = new Paciente()
    const nombre = request.input('nombre')
    const nss = request.input('nss')
    const telefono = request.input('telefono')
    const edad = request.input('edad')
    const sexo = request.input('sexo')
    const aseguradora = request.input('aseguradora')
    const usuario = request.input('usuario')
    try {
      paciente.nombre = nombre
      paciente.nss = nss
      paciente.telefono = telefono
      paciente.edad = edad
      paciente.sexo = sexo
      paciente.aseguradora = aseguradora
      paciente.usuario = usuario
      await paciente.save()
      return response.status(200)
    } catch {
      return response.badRequest('Invalido')
    }
  }

  public async show({}: HttpContextContract) {
    
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const nombre = request.input('nombre')
    const nss = request.input('nss')
    const telefono = request.input('telefono')
    const edad = request.input('edad')
    const sexo = request.input('sexo')
    const aseguradora = request.input('aseguradora')
    const usuario = request.input('usuario')
    try {
      const paciente = await Paciente.findOrFail(params.id)
      paciente.nombre = nombre
      paciente.nss = nss
      paciente.telefono = telefono
      paciente.edad = edad
      paciente.sexo = sexo
      paciente.aseguradora = aseguradora
      paciente.usuario = usuario
      await paciente.save()
      return response.status(200)
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async destroy({params,request, response }: HttpContextContract) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    try {
      const paciente = await Paciente.findOrFail(params.id)
      await paciente.delete()
      return response.status(200)
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }
}
