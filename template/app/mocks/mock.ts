import { axiosMockAdapterInstance } from '../axios';

axiosMockAdapterInstance.onAny('https://randomuser.me/api/')
.reply(200, {results:[{id : 1 , name: 'Guy' , email : 'guy.eini@gmail.com' }]});

