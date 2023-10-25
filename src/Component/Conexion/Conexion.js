


const conexion = async (state) => {
    const datos = await fetch('http://demo5977105.mockable.io/');
    const respuesta = await datos.json();
    state(respuesta)

}


export {
    conexion
}