function obtenerCupon()
{    
    var codigoC = $("#codigoC").val().trim();
    let contenido = "";
    if(codigoC != "")
    {
        $.ajax({
            url : 'http://127.0.0.1:8000/api/obtenerCupon',
            data : { codigoCupon : codigoC },
            type : 'GET', 
            dataType : 'json',
            contentType: 'application/json',
            headers: {
              'Authorization': 'Bearer ' + 'k1MTnhBlVMtWh2XZ6k8HEQYyz2pC31SphQpg1Y6z'
            },
            success : function(response) {
                //console.log(response.cupon);
               if(response.cupon != null){
                    if(response.cupon.Estado == 1)   
                    {
                        contenido+= `
                        <h4 class="card-title" style="color: #7d2972">${response.cupon.titulo}</h4>
                        <hr />
                        <div class="row">
                        <div class="col-2">
                            <h6 class="card-subtitle mb-2 text-body-secondary">Código</h6>
                            <p class="card-text">${response.cupon.codigoCupon}</p>
                        </div>
                        <div class="col-2">
                            <h6 class="card-subtitle mb-2 text-body-secondary">Estado:</h6>
                            <p class="card-text">Disponible</p>
                        </div>
                        <div class="col-3">
                            <h6 class="card-subtitle mb-2 text-body-secondary">Empresa:</h6>
                            <p class="card-text">${response.cupon.Empresa}</p>
                        </div>
                        <div class="col-1">
                            <h6 class="card-subtitle mb-2 text-body-secondary">Precio:</h6>
                            <p class="card-text">$ ${response.cupon.Precio}</p>
                        </div>
                        <div class="col-2">
                            <h6 class="card-subtitle mb-2 text-body-secondary">DUI:</h6>
                            <p class="card-text">${response.cupon.dui}</p>
                        </div>
                        <div class="col-1">
                            <div class="col-2" style="padding: 0; width: 160px">
                                <button                      
                                    class="btn btn-success text-center"
                                    style="
                                        color: white;
                                        height: 37px;
                                        width: 150px;
                                        font-size: 17px;
                                        font-weight: bold;
                                    "
                                    name="canjear"
                                    id="btnCanjear"
                                >
                                Canjear
                                </button>
                            </div>
                        </div>
                        </div>                    
                        `;
                        $("#cuerpoCarta").html(contenido);
                    }else{
                        Swal.fire(
                            'Cupón canjeado',
                            'El cupón que ha ingresado ya se encuentra canjeado',
                            'warning'
                          )
                    }                                             
               }else{
                Swal.fire(
                    'No se encontró el cupón',
                    'Verifique si el código es correcto',
                    'warning'
                  )
               }
            },
            error : function(jqXHR, status, error) {
              alert('Disculpe, existió un problema');
            },
          });
         /* alert(codigoC);
          $.ajax({
            url: "http://127.0.0.1:8000/api/obtenerCupon",
            data : { codigoCupon : codigoC },
            method: "GET",
            dataType: "json",
            headers: {
                'Authorization': 'Bearer ' + 'k1MTnhBlVMtWh2XZ6k8HEQYyz2pC31SphQpg1Y6z'
            },
            success: function(response) {
              if (response.length > 0) {
                // La respuesta tiene elementos, hacer algo con ellos
                console.log(response);
              } else {
                // La respuesta está vacía
                console.log("No se encontraron usuarios");
              }
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log("Error al obtener los usuarios: " + errorThrown);
            }
          });*/
    }else{        
        Swal.fire(
            'Campo vacío',
            'Debe de ingresar el código del cupón a buscar',
            'warning'
          )
    }
    
    
}