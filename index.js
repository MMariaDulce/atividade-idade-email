function Email(email){
   const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
  return regex.test(email) 
};

console.log(Email('mariadulce@gmail.com'))

module.exports = Email