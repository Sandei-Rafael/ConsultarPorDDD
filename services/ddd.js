export const buscarDDDCallBack = async (ddd, callback)=>{
   let urlAPI = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
   fetch(urlAPI,{
    method: "GET"
   })
   .then(resposta =>{
        if(!resposta.ok){
            throw new Error("Deu ruim no fetch kkkk")
        }
        return resposta.json();
   })
   .then(resposta => callback(resposta))
   .catch(error => {console.error('Error:',error);});
}