import {createServer, Model, Response} from 'miragejs';

createServer({
  urlPrefix: 'http://localhost:8080',
  namespace: 'api',
  models: {
    user: Model,
  },
  seeds(server) {
    server.create('user', {
      firstName: 'Venancio',
      lastName: 'Dumas',
      email: 'venanciomissions@gmail.com',
      password: '12345678',
      token : 'eyokfnmokenfkoeno98798378943ekljnfejknfeefefe',
      avatar: 'https://avatars.githubusercontent.com/u/41402809?v=4',
    });
  },
  routes() {
    this.get('/user', shema => {
      return shema.users.all();
    });
    // Auth user
    this.post('/auth', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.users.findBy({
        email: body.email,
        password: body.password,
      });


      if (!user) {
        return new Response(404);
      }
      return user;
    });

    //Create user
    /** fistName: string
     *  lastName: string 
     *  token : string
     * password:string
     * 
     * 
     */

    this.post('/user', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.users.create({...body, token:'eysdisidjisjdisds3r3r3rsegege'},
      );
      return user;
    });
  },
});
