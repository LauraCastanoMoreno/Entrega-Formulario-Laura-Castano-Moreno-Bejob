function muestraPuntos(){
  var puntos=document.getElementById('range').value; 
  alert("Has valorado con "+puntos+" puntos");
}

function muestraCuenta(){
    var pais=document.getElementById('pais').value;
    var iban=document.getElementById('iban').value; 
    var entidad=document.getElementById('entidad').value; 
    var sucursal=document.getElementById('sucursal').value; 
    var digitoControl=document.getElementById('digitoControl').value; 
    var cuenta=document.getElementById('cuenta').value; 
    var laCuenta=pais+iban+"-"+entidad+"-"+sucursal+"-"+digitoControl+"-"+cuenta;
    alert("Le informamos que la cuenta bancaria es "+ laCuenta);
  }

  function muestraFecha(){
    var fecha=document.getElementById('fecha').value; 
    var fecha_tipodate=new Date(fecha);
    var diasemana_numero=fecha_tipodate.getDay();
    var dias=["domingo","lunes","martes","miércoles","jueves","viernes","sabadete"];
    var diasem=dias[diasemana_numero];
    alert("La fecha seleccionada en el elemento de fecha es un " + diasem);
  }

  let elTitulo=document.getElementById("titulo");
  elTitulo.style.color="blue";
  elTitulo.style.textAlign="center";
  elTitulo.style.textShadow="3px 3px 3px yellow";
  
  
  let losLegends=document.getElementsByTagName("legend");
  for (let i=0; i< losLegends.length; i++){
    losLegends[i].style.backgroundColor="red";
    losLegends[i].style.color="white";
  }
  
  
  let losFieldset=document.getElementsByTagName("fieldset");
  for (let i=0; i< losFieldset.length; i++){
    losFieldset[i].style.backgroundColor="cyan";  
  }

  let losInput=document.getElementsByTagName('input');
  for (let i=0; i< losInput.length; i++){
    if (losInput[i].type=="text"){
      losInput[i].style.backgroundColor="yellow";  
    }
    if (losInput[i].type=="button"){
      losInput[i].style.backgroundColor="pink";
      losInput[i].style.width="100px";
      losInput[i].style.height="40px"; 
      losInput[i].style.whiteSpace="normal";
     }
     losInput[i].style.margin="2px"; 
  }  
  
