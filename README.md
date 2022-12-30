# Tienda de Muebles 

Este proyecto se trata de un Ecommerce generado como entrega final del curso de React de Coderhouse, el mismo fue bajado a Netlify para simular su navegación, el link al proyecto es:

https://polite-kashata-ad6067.netlify.app/

## Dependencias externas

A continuación se detallan las dependencias externas utilizadas en el proyecto, junto con una breve explicación de su uso/beneficio.

     Dependencias de Material UI y sus respectivos estilos, fuentes e íconos. Se utilizó para incorporar componentes predeterminados.
     
    "@emotion/react": "^11.10.5"
    "@emotion/styled": "^11.10.5"
    "@fontsource/roboto": "^4.5.8"
    "@mui/icons-material": "^5.10.16"
    "@mui/material": "^5.10.17"
    
    Utilizado para detectar errores en código.
    "eslint-plugin-react-hooks": "^4.6.0"
    
    Utilizado para generar y consumir bases de datos NoSQL.
    "firebase": "^9.15.0"
    
    Utilizado para la navegavilidad de la página.
    "react-router-dom": "^6.4.5"

    Utilizado para darle estilo al alert con el feedback del procesamiento de la orden.
    "sweetalert": "^2.1.2"

## Introducción al funcionamiento general de la aplicación y flujo básico

Desde la pantalla principal se pueden visualizar todos los productos cargados en la base de datos de firebase. Por otra parte, en el Navbar tenemos acceso a un filtro por categoria, que renderiza los productos nuevamente, pero esta vez filtrados. Dicho Navbar, cuenta además con acceso directo al carrito de compras, la ruta raíz y dos menúes, también cargados en Firebase pero que solo fueron colocados a modo de prueba.
Todos los productos cuentan con un botón de "Más Información" que nos permite ver su imagen, precio y detalle y, en caso de requerirlo, poder incorporar la cantidad que deseemos al carrito de compras. Es importante destacar que, nunca se podrá seleccionar una cantidad mayor al stock existente (el mismo se encuentra fijado en la base de Firebase), por otra parte, el botón de añadir al carrito, se encontrará inactivo en caso de no contar con stock disponible (ejemplo de esto es el ítem "PIE DE CAMA ANIKKA".
Al incorporar el producto al carrito podemos ir directamente a terminar la compra o seguir comprando.
Al terminar la selección de ítems a comprar e ir al carrito, podremos visualizar un detalle de nuestra compra en el que se verán los ítems seleccionados, cantidad, subtotal y total. En caso de querer borrar un ítem, podrá realizar pulsando el ícono correspondiente. También se puede borrar el carrito completo pulsando el botón correspondiente.
En caso de querer completar la compra, deberá pulsar el botón "Enviar Pedido". El mismo lo llevará a una pantalla en la que verá un nuevo detalle de la compra, más resumido que el del carrito y le solicitará que ingrese sus datos personales para finalizar la compra. Al completarlos se deberá tener en cuenta de rellenarlos todos y que las direcciones de Email coincidan, ya que en caso de no cumplir con este requisito, el sistema enviará una notificación para que complete correctamente el formulario.
Una vez completados, deberá pulsar el botón "Enviar Orden" y, en caso de que los datos sean validados correctamente, el sistema devolverá una notificación informando el número de orden generado y la dirección de Email donde se enviarán los detalles de la misma.

## Acceso a Firebase

El acceso a firebase se encuentra restringido debido a que las claves de acceso fueron almacenadas en un archivo .env localmente. En caso de necesitar cargar la página fuera del link deberá solicitar dicho archivo.
