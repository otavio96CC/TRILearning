module.exports = (request, response)=>{
    const { body } = request;
    
    if(body.base  === '' || body.altura === ''){
        return response.status(400).send({erro: 'campos vazios'});
    }
    if(body.base <= 0 || body.altura <= 0){
        return response.status(400).send({erro: 'Os base e altura devem ser maiores que 0.'});
    }

    const calculo = (body.base * body.altura)/2;
    return response.send({message: calculo});
};