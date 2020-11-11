module.exports = (request, response)=>{
    const { body } = request;
   
    if(body.ladoA  === '' || body.ladoB  === '' || body.ladoC  === ''){
        return response.status(400).send({erro: 'campos vazios'});
    }
    if(body.ladoA <= 0 || body.ladoB <= 0 || body.ladoC <= 0){
        return response.status(400).send({erro: 'Os lados devem ser maiores que 0.'});
    }
    const calculo = (parseFloat(body.ladoA) + parseFloat(body.ladoB) + parseFloat(body.ladoC)); 
    return response.send({message: calculo});
};