var assert = require('assert');

var MathFunctions = require('../MathFunctions')

var mf = new MathFunctions()



describe('Prueba operaciones matematicas', function() {
 
    it('Deberia sumar dos numeros', function() {
      var resultado = mf.suma(2,3)
      assert.equal(resultado, 5);
    });
    
    it('6+10 = 16',function(){
      var resultado = mf.suma(6,10)
      assert.equal(resultado,16)
    })

});


