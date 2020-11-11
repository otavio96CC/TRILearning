module.exports = (request, response)=>{
    const { body } = request;

    if(body.catetoOposto === '' || body.catetoAdjacente === ''){
        return response.status(400).send({erro: 'campos vazios'});
    }
    if(body.catetoOposto <= 0 || body.catetoAdjacente <= 0){
        return response.status(400).send({erro: 'Os catetos devem ser maiores que 0.'});
    }

    const calculo = Math.hypot(body.catetoOposto, body.catetoAdjacente);
    return response.send({message: calculo});
};

