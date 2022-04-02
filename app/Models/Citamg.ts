import { DateTime } from 'luxon'
import mongoose from 'mongoose'
import {Schema,model} from 'mongoose'

export default class Citamg {
  
  static citaSchema = new Schema({
    fecha:String,
    hora:String,
    medico:Number,
    paciente:Number,
    clinica:Number,
  },{versionKey:false});
  static Citamg:any=model('citas', this.citaSchema)
}
  
