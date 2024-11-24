const database = 'bd3_atv4';

const collection = 'bd3_atv4_mensagens';

use(database);

db[collection].insertMany(
    [
        {
            "Data":"15/10/2023",
            "Horário":"12:15",
            "Mensagem":"Boa tarde! Como vai?"
        },
        {
            "Data":"22/09/2024",
            "Horário":"10:30",
            "Mensagem":"Olá Roberto, em breve enviarei os documentos que havia me pedido."
        },
        {
            "Data":"12/12/2023",
            "Horário":"16:55",
            "Mensagem":"Estamos saindo do local combinado, ok?"
        },
        {
            "Data":"02/11/2023",
            "Horário":"21:30",
            "Mensagem":"Boa noite, Mariana! Estou cansado no momento, vou dormir já, amanhã confirmarei se vou ao evento da marca."
        },
        {
            "Data":"08/07/2024",
            "Horário":"08:00",
            "Mensagem":"Boa dia equipe! Chegarei um pouco atrasado hoje, mas em breve estarei ai!"
        },
        {
            "Data":"30/05/2024",
            "Horário":"17:21",
            "Mensagem":"O cabeleireiro está aberto, passei em frente agora a pouco."
        },
        {
            "Data":"13/06/2024",
            "Horário":"14:40",
            "Mensagem":"E ai, vamos reservar aquele horário no restaurante no sábado?"
        },
        {
            "Data":"25/08/2024",
            "Horário":"23:06",
            "Mensagem":"Olá, pelo horário do contato espero que seja algo importante!"
        },
        {
            "Data":"18/04/2024",
            "Horário":"13:07",
            "Mensagem":"Estão almoçando onde hoje?"
        },
        {
            "Data":"22/07/2023",
            "Horário":"18:10",
            "Mensagem":"Oi, aquele arquivo do notorious está com você ainda?"
        }
    ]
)