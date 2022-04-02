import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Cita from 'App/Models/Cita'

export default class CitasController {
  public async index({ response }: HttpContextContract) {
    try {
      /*const cita = await Cita.all()
      return cita*/
      const cita = Database.query().from('citas')
      .innerJoin('medicos','medicos.id_medico','citas.medico')
      .innerJoin('pacientes','pacientes.id_paciente','citas.paciente')
      .innerJoin('clinicas','clinicas.id_cli','citas.clinica')
      .select('citas.id_cita','citas.fecha','citas.hora','medicos.nombre as medico','pacientes.nombre as paciente','clinicas.nombre as clinica')
      return cita
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async citasdia({ response, params }: HttpContextContract) {
    try{
      const cita = Database.query().from('citas')
      .innerJoin('medicos','medicos.id_medico','citas.medico')
      .innerJoin('pacientes','pacientes.id_paciente','citas.paciente')
      .innerJoin('clinicas','clinicas.id_cli','citas.clinica')
      .select('citas.id_cita','citas.fecha','citas.hora','medicos.nombre as medico','pacientes.nombre as paciente','clinicas.nombre as clinica').where('citas.fecha',params.fecha)
      return cita
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }
  
  public async create({}: HttpContextContract) {
    
  }

  public async store({ request, response }: HttpContextContract) {
    const cita = new Cita()
    const fecha = request.input('fecha')
    const hora = request.input('hora')
    const medico = request.input('medico')
    const paciente = request.input('paciente')
    const clinica = request.input('clinica')
    try{
        cita.fecha = fecha
        cita.hora = hora
        cita.medico = medico
        cita.paciente = paciente
        cita.clinica = clinica
        await cita.save()
        return response.status(200)
    } catch {
      return response.badRequest('Error al crear la cita')
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const fecha = request.input('fecha')
    const hora = request.input('hora')
    const medico = request.input('medico')
    const paciente = request.input('paciente')
    const clinica = request.input('clinica')
    
    try {
      const cita = await Cita.findOrFail(params.id)
      cita.fecha = fecha
      cita.hora = hora
      cita.medico = medico
      cita.paciente = paciente
      cita.clinica = clinica
      await clinica.save()
      return response.status(200)
    } catch {
      response.badRequest('Error al actualizar la cita')
    }
  }

  public async destroy({ params, request, response }: HttpContextContract) {
    try {
      const cita = await Cita.findOrFail(params.id)
      await cita.delete()
      return response.status(200)
    } catch {
      response.badRequest('Error al eliminar la cita')
    }
  }
}
function citas(citas: any) {
  throw new Error('Function not implemented.')
}

