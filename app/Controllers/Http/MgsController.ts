import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database"
import Citamg from "App/Models/Citamg"
import Cita from "App/Models/Cita"
import mongoose from 'mongoose'
export default class MgsController {
    public async saveMongo({request,response})
    {
        await mongoose.connect('mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority')
        const cita = new Cita()
        const fecha = request.input('fecha')
        const hora = request.input('hora')
        const medico = request.input('medico')
        const paciente = request.input('paciente')
        const clinica = request.input('clinica')
        const select = await Database.rawQuery('Select count(*) as registros from citas where citas.fecha = ? && citas.hora = ? && citas.medico = ?',[fecha, hora, medico])
        const opselect = select[0]
        const opselc = opselect[0] 
        if(opselc['registros'] == 0 )
        {
            cita.fecha = fecha
            cita.hora = hora
            cita.medico = medico
            cita.paciente = paciente
            cita.clinica = clinica
            await cita.save()
            const crear = new Citamg.Citamg({"fecha":fecha,"hora":hora,"medico":medico,"paciente":paciente,"clinica":clinica})
            crear.save()
            return response.json(crear)
        } else
        {
            return response.badRequest("Fecha, lugar y medico ocupado seleccione otra")
        }

        /*const select = await Database.rawQuery('Select count(*) as registros from citas where citas.fecha = ? && citas.hora = ? && citas.medico = ?',[fecha, hora, medico])
        const opselect = select[0]
        const opselc = opselect[0]
        console.log(id_cita)
        if(opselc == 0 )
        {
            try
            {
                return response.badRequest('Fecha, lugar y medico ocupado seleccione otra')
            } catch
            {
                console.log('Error al crear la cita')
            }
        } else
        {
            cita.fecha = fecha
            cita.hora = hora
            cita.medico = medico
            cita.paciente = paciente
            cita.clinica = clinica
            await cita.save()
            const crear = new Citamg.Citamg({"id_cita":id_cita,"fecha":fecha,"hora":hora,"medico":medico,"paciente":paciente,"clinica":clinica})
            crear.save(function(err){console.log(err)})
            return response.ok('Entro al if y guardo')
        }*/
    }

    public async destroy({request,response})
    {
        await mongoose.connect('mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority')
        const cita = new Cita()
        const fecha = request.input('fecha')
        const hora = request.input('hora')
        const medico = request.input('medico')
        const paciente = request.input('paciente')
        const clinica = request.input('clinica')
        const select = await Database.rawQuery('Select count(*) as registros from citas where citas.fecha = ? && citas.hora = ? && citas.medico = ?',[fecha, hora, medico])
        const opselect = select[0]
        const opselc = opselect[0] 
        if(opselc['registros'] == 0 )
        {
            cita.fecha = fecha
            cita.hora = hora
            cita.medico = medico
            cita.paciente = paciente
            cita.clinica = clinica
            await cita.save()
            const crear = new Citamg.Citamg({"fecha":fecha,"hora":hora,"medico":medico,"paciente":paciente,"clinica":clinica})
            crear.save()
            return response.json(crear)
        } else
        {
            return response.badRequest("Fecha, lugar y medico ocupado seleccione otra")
        }
    }

    public async queryvalidacion({params,request,response})
    {
        await mongoose.connect('mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority')
        const fecha = request.input('fecha')
        const hora = request.input('hora')
        const medico = request.input('medico')
        const select = await Database.rawQuery('Select count(*) as registros from citas where citas.fecha = ? && citas.hora = ? && citas.medico = ?',[fecha, hora, medico])
        const opselect = select[0]
        const opselc = opselect[0] 
        if(opselc['registros'] == 0 )
        {
            return response.ok('Puede Guardadar')
        } else
        {
            return response.badRequest('Fecha, lugar y medico ocupado seleccione otra')
        }
        /*const opselc = opselect[0]*/
    }
}
/*const mongoosed = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');*/

/*const citaSchema = mongoosed.Schema({
    id_cita:{ type: Number, require: true},
    fecha:{ type: String, require: true},
    hora: { type: String, require: true},
    medico: { type: Number, require: true},
    paciente: { type: Number, require: true},
    clinica: { type: Number, require: true},
},{versionKey:false});
const citasmodel = mongoose.model('citas', citaSchema)*/


//citaSchema.plugin(uniqueValidator)

/*const uri = 'mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority'

const { Schema } = mongoose;
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifinedTopology:true
});*/
    /*public async saveMongo({params,request,response})
    {
        
        const cita = new Cita()
        const id_cita=request.input('id_cita')
        const fecha = request.input('fecha')
        const hora = request.input('hora')
        const medico = request.input('medico')
        const paciente = request.input('paciente')
        const clinica = request.input('clinica')
        const select = await Database.rawQuery('Select count(*) as registros from citas where citas.fecha = ? && citas.hora = ? && citas.medico = ?',[fecha, hora, medico])
        const opselect = select[0]
        const opselc = opselect[0]
        console.log(id_cita)
        if(opselc != 0 )
        {
            try{
            await mongoose.connect('mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority')
            cita.fecha = fecha
            cita.hora = hora
            cita.medico = medico
            cita.paciente = paciente
            cita.clinica = clinica
            await cita.save()
            const crear = new Citamg.Citamg({"id_cita":id_cita,"fecha":fecha,"hora":hora,"medico":medico,"paciente":paciente,"clinica":clinica})
            crear.save(function(err){console.log(err)})
            return response.ok('Entro al if y guardo')
        } catch{
            console.log('Error al crear la cita')
        }
        } else{
            return response.badRequest('Fecha, lugar y medico ocupado seleccione otra')
        }
    }/

    /*public async store({ request, response }: HttpContextContract) {
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
      }*/


/*export default class MgsController {
    public async saveMongo({params,request,response})
    {
        const cita = new Cita()
        const id_cita=request.input('id_cita')
        const fecha = request.input('fecha')
        const hora = request.input('hora')
        const medico = request.input('medico')
        const paciente = request.input('paciente')
        const clinica = request.input('clinica')
        const select = await Database.rawQuery('Select count(*) as registros from citas where citas.fecha = ? && citas.hora = ?',[params.fecha,params.hora])
        const opselect = select[0]
        const opselc = opselect[0]
    
        (opselc != 0 ){
            console.log(id_cita)
            await mongoose.connect('mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority')
            try {
                cita.fecha = fecha
                cita.hora = hora
                cita.medico = medico
                cita.paciente = paciente
                cita.clinica = clinica
                await cita.save()
                    return response.status(200)
                await Cita.save()
                const crear = new Citamg.Citamg({"id_cita":id_cita,"fecha":fecha,"hora":hora,"medico":medico,"paciente":paciente,"clinica":clinica})
                crear.save(function(err){
                    console.log(err);
            })
            return response.json(crear)
            } catch {
                return response.badRequest('Error al crear la cita')
            }
        }
        else{
            return response.badRequest('fecha ocupada')
        }

        
        let id_citadb: any [] = [];
        let fechabd: any [] = [];
        let horadb: any [] = [];
        let medicodb: any [] = [];
        let pacientedb: any [] = [];
        let clinicadb: any [] = [];

        id_citadb = Citamg.Citamg.aggregate([{ "$project" : { "_id":0, "id_cita" : 1.0}}], { "allowDiskUse" : false});
        fechabd = Citamg.Citamg.aggregate([{ "$project" : { "_id":0, "fecha" : 1.0}}], { "allowDiskUse" : false});
        horadb = Citamg.Citamg.aggregate([{ "$project" : { "_id":0, "hora" : 1.0}}], { "allowDiskUse" : false});
        medicodb = Citamg.Citamg.aggregate([{ "$project" : { "_id":0, "medico" : 1.0}}], { "allowDiskUse" : false});
        pacientedb = Citamg.Citamg.aggregate([{ "4project" : { "_id":0, "paciente" : 1.0}}], { "allowDiskUse" : false});
        clinicadb = Citamg.Citamg.aggregate([{ "$project" : { "_id":0, "clinica" : 1.0}}], { "allowDiskUse" : false});
        console.log(id_cita)
        await mongoose.connect('mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority')
        try {
            cita.fecha = fecha
            cita.hora = hora
            cita.medico = medico
            cita.paciente = paciente
            cita.clinica = clinica
            await cita.save()
                return response.status(200)
            await Cita.save()
            const crear = new Citamg.Citamg({"id_cita":id_cita,"fecha":fecha,"hora":hora,"medico":medico,"paciente":paciente,"clinica":clinica})
            crear.save(function(err){
                console.log(err);
            })
            
            return response.json(crear)
        } catch {
          return response.badRequest('Error al crear la cita')
        }
      }
    
        const contador = Citamg.Citamg.aggregate([{ "$count" : "id_cita"}], { "allowDiskUse" : false});
        for (let i = 0; i < contador.length; i++) {
            id_citadb[i];
            fechabd[i];
            horadb[i];
            medicodb[i];
            pacientedb[i];
            clinicadb[i];
        }
        


        
        if((hora == horadb && medico == medicodb && fecha == fecha))
        {
            response.badRequest('Cita no registrada por falta de disponivilidad');
        } else {
            console.log('Le valio y entro')
            response.ok('le valio y entro')
            
            });
        }
        const crear = new Citamg.Citamg({"id_cita":id,"fecha":fecha,"hora":hora,"medico":medico,"paciente":paciente,"clinica":clinica})
            crear.save(function(err){
                console.log(err);
            })
            
            return response.json(crear)
        
        if((id != id_citadb && fecha != fechabd && hora != horadb && medico != medicodb && paciente != pacientedb && clinica != clinicadb) || (hora != horadb && medico != medicodb))
        {
            
        }
        else{
            response.badRequest('Cita no registrada por falta de disponivilidad')
        }
        const crear=new PartidoModelo.PartidoModelo({"id_cita":id,"comentario":[comentarios]})
        

    public async store({request,response})
    {
        const cita = new Cita()
        const fecha = request.input('fecha')
        const hora = request.input('hora')
        const medico = request.input('medico')
        const paciente = request.input('paciente')
        const clinica = request.input('clinica')
        try {
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

    public async modificar({request,response})
    {
        try
        {
        await mongoose.connect('mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority')
        const id=request.input('id_cita')
        const fecha = request.input('fecha')
        const hora = request.input('hora')
        const medico = request.input('medico')
        const paciente = request.input('paciente')
        const clinica = request.input('clinica')
        console.log(id)
        response = await Citamg.Citamg.updateOne({"id_cita":id},{$push:{"fecha":fecha,"hora":hora,"medico":medico,"paciente":paciente,"clinica":clinica}})
        return response
        }
        catch
        {
            return  response.badRequest('Hubo un error')
        }
    }
    public async verCita({ response })
    {
        try {
            const cita = await Cita.all()
            return cita
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
    public async verCitamg({/*params,response})
    {
        await mongoose.connect('mongodb+srv://JuanCastorena:Juan1812@bdone.9jf7x.mongodb.net/clinica?retryWrites=true&w=majority')
        const query = await Citamg.Citamg.find()
        return query
    } 
    public async delete({response,params})
    {
        try
        {
            const cita=await Cita.findOrFail(params.id)
            await cita.delete()
            
        }catch
        {
            return response.badRequest('ERROR')
        }
    }*/

