

const validation =(nom,valor)=>{
  let regexMail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let regexPass = /^(?=.*\d)[A-Za-z\d]{6,10}$/;
  if(nom==='email'){
    let flag=regexMail.test(valor) 
    if(flag){
        return ''
    }else return 'Email incorrecto' // agregar todos los tipos de errores...
  } 
  if(nom==='password'){
    let flag=regexPass.test(valor);
    if(flag){
        return ''
    }return 'Contraseña incorrecta'
  } 
}
export default validation;