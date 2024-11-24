const database = 'bd3_atv4';
const collection = 'bd3_atv4_mensagens';
use(database);

db[collection].find({
    categoria:"Mensagem",
    Mensagem: /estou cansado/i
})