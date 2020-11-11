module.exports = (request, response)=>{
    const { body } = request;
    
    if(body.lado === ''){
        return response.status(400).send({erro: 'campo vazio'});
    }
    if(body.lado <= 0){
        return response.status(400).send({erro: 'O lado deve ser maior que 0.'});
    }

    const calculo = (Math.pow(body.lado, 2) * Math.sqrt(3))/4; 
    return response.send({message: calculo});
};