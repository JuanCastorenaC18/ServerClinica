import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'admin@gmail.com',
        password: 'admin123',
        rol: 1
      },
      {
        email: 'octavio123@gmail.com',
        password: '123octavio',
        rol: 2
      }
    ])
  }
}
