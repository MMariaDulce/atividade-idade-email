const verificaEmail = require("./index");


test('testa se o email é true', ()=>{
   expect(verificaEmail('mariadulce@gmail.com')).toBe(true);  
});