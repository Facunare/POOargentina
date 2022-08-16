const boton = document.querySelector('.submit');
const nombre = document.getElementById('name');
const apellido = document.getElementById('apellido');
const error = document.querySelector('.error');
const form = document.getElementById('form');
const efectivo = document.getElementById('efectivo');
const tarjeta = document.getElementById('tarjeta');
const label_efectivo = document.getElementById('label__efectivo');
const label_tarjeta= document.getElementById('label__tarjeta');
const salta = document.querySelector('.checkbox_salta');
const mendoza = document.querySelector('.checkbox_mendoza');
const neuquen = document.querySelector('.checkbox_neuquen');
const opc_salta = document.querySelectorAll('.eleccion_salta');
const opc_mendoza = document.querySelectorAll('.eleccion_mendoza');
const opc_neuquen = document.querySelectorAll('.eleccion_neuquen');
const prov = document.querySelectorAll('.checkbox');
window.addEventListener('load', ()=>{

    var cadena = "";

    salta.addEventListener('change', ()=>{
        if(salta.checked){
            opc_salta.forEach((saltas)=>{
                console.log(saltas)
                saltas.removeAttribute("disabled");
            })
            mendoza.setAttribute('disabled', "");
            neuquen.setAttribute('disabled', "");
        }else{
            opc_salta.forEach((saltas)=>{
                saltas.setAttribute("disabled", "");
            })
            mendoza.removeAttribute('disabled');
            neuquen.removeAttribute('disabled');
        }
        
    })



    mendoza.addEventListener('change', ()=>{
        if(mendoza.checked){
            opc_mendoza.forEach((mendozas)=>{
                mendozas.removeAttribute("disabled");
            })
            salta.setAttribute('disabled', "");
            neuquen.setAttribute('disabled', "");
        }else{
            opc_mendoza.forEach((mendozas)=>{
                mendozas.setAttribute("disabled", "");
            })
            salta.removeAttribute('disabled');
            neuquen.removeAttribute('disabled');
        }
        
        
        
    })
    neuquen.addEventListener('change', ()=>{
        if(neuquen.checked){
            opc_neuquen.forEach((neuquen)=>{
                neuquen.removeAttribute("disabled");
            })
            salta.setAttribute('disabled', "");
            mendoza.setAttribute('disabled', "");
        }else{
            opc_neuquen.forEach((neuquen)=>{
                neuquen.setAttribute("disabled", "");
            })
            salta.removeAttribute('disabled');
            mendoza.removeAttribute('disabled');
        }
        
        
        
    })
    
    
    
    
    form.addEventListener('submit', e=>{
        e.preventDefault();
        let entrar = false;
        if(nombre.value == '' || apellido.value == ''){
            error.innerHTML = 'Error al enviar';
            error.style.color = 'red';
            entrar = true;
        }
        if(efectivo.checked==false && tarjeta.checked==false || efectivo.checked==true && tarjeta.checked==true ){
            error.innerHTML = 'Error al enviar';
            error.style.color = 'red';
            entrar = true;
        }
    
        if(salta.checked==false && mendoza.checked==false && neuquen.checked==false){
            error.innerHTML = 'Error al enviar';
            error.style.color = 'red';
            entrar = true;
        }
        
       
    
        if(entrar==false){
            if(efectivo.checked==true){
                cadena = "efectivo";
                console.log(cadena)
                efectivo.name = 'activo';
            }else if(tarjeta.checked==true){
                cadena = "tarjeta";
                console.log(cadena)
                tarjeta.name = 'activo';
            }

            if(salta.checked){
                provincia = "Viaje a salta"
            }else if(mendoza.checked){
                provincia = "Viaje a mendoza"
            }else if(neuquen.checked){
                provincia = "Viaje a neuquen"
            }
            error.innerHTML = 'Enviado correctamente';
            error.style.color = 'green';
            $.post('enviar.php', {nombre: nombre.value, apellido: apellido.value, pago: cadena, provincia: provincia}, function(data){
                if(data!=null){
                    console.log('ok');
                }
            })
        }
    
    
    
        
    
    })
})
