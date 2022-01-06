# VALKIRIA ecommerce

## DEPENDENCIES AND VERSIONS 

[![bootstrap](https://img.shields.io/badge/bootstrap-%5E5.1.3-purple)](https://react-bootstrap.github.io/)

[![fontawsome](https://img.shields.io/badge/fontawsome-%5E0.1.16-purple)](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)

[![mui-material](https://img.shields.io/badge/mui--material-%5E5.2.7-purple)](https://mui.com/)

[![firebase](https://img.shields.io/badge/firebase-%5E8.9.1-purple)](https://firebase.google.com/)

[![react-router-dom](https://img.shields.io/badge/react--router--dom-%5E6.0.2-purple)](https://v5.reactrouter.com/web/guides/quick-start)

[![sass](https://img.shields.io/badge/sass-%5E1.46.0-purple)](https://sass-lang.com/)

[![spinners-react](https://img.shields.io/badge/spinners--react-%5E1.0.6-purple)](https://www.npmjs.com/package/spinners-react)

[![styled-components](https://img.shields.io/badge/styled--components-%5E5.3.3-purple)](https://styled-components.com/)

## COMMANDS

### Development mode

### `npm start`

### React-Bootstrap

```sh
npm install react-bootstrap bootstrap@5.1.3
```

### FontAwsome

```sh
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

### Mui Material

```sh
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

### Firebase

```sh
npm install firebase@8.9.1
```

### React Router Dom

```sh
npm install react-router-dom@6.0.2
```

### Sass

```sh
npm install sass
```

### Spinners React

```sh
npm install spinners-react
```

### Styled Components

```sh
npm install --save styled-components
```

### Deploy

### `npm run build`


## DESCRIPCION

Valkiria ecommerce es una empresa ficticia creada con React.js.  
Para este proyecto utilizó firebase como base de datos para almacenar los productos del ecommerce, para que el usuario pueda generar ordenes de compra y tambien poder visualizarlas. 

### Dentro del ecommerce encontrarás:

- ### Home

Allí podras encontrar una vista previa de toda la lista de productos cargados en el ecommerce, los cuales cada uno cuenta con un botón de "ver detalle" para ver la información completa del producto seleccionado.  

> El menú de navegación estará visible durante toda la experiencia del usuario.  
> Dentro del mismo podremos encontrar: el logo de la marca (accede a home), categorías, órdenes y el carrito.  
> 
> El footer también se podrá visualizar durante toda la experiencia. 

- ### Categorías

Las mismas se encuentran dentro del nav para que puedan ser accesibles por el usuario durante todo el recorrido de la web.  
El ecommerce cuenta con seis categorías: auriculares, mouses, teclados, webcams, audio y accesorios.  
Cada categoría nos devuelve un grupo de tres productos de la misma categoría, la forma de visualizarlos será igual que para la vista previa en home.

- ### Productos

Los productos se podrán seleccionar desde cualquiera de los items mencionados anteriormente (home o categorias) ya que ambos cuentan con el botón de "ver detalle". 

Una vez seleccionado "ver detalle" este link nos dirigirá hacia el detalle del producto seleccionado, donde podremos observar la imagen del producto junto con su título, precio, breve descripción, botones para seleccionar la cantidad que queremos de ese producto y un boton "comprar" que nos dirigirá a nuestro carrito.

- ### Carrito

Si ingresamos al carrito sin haber seleccionado previamente producto(s) nos devolverá un mensaje de alerta: "Su carrito esta vacío" junto con un boton "elegir productos" que redirige al usuario a home nuevamente, para que este pueda continuar seleccionando sus productos.  
El usuario puede volver a home accediendo a ese botón o mediante el link del logo "valkiria". 

Cuando haya productos seleccionados podremos visualizarlos dentro del carrito.  
Allí podremos ver su imagen, titulo, precio, boton para sumar o quitar cantidad del producto y un icon de cesto que elimina ese producto mediante su ID.  
También encontraremos un recuadro con el total de la compra, dentro del mismo se encontrarán dos botones "finalizar compra" y "continuar comprando".  
El botón finalizar nos dirige a un formulario para que el usuario complete sus datos de compra, o tambien si lo desea puede continuar seleccionando productos a su carrito con el boton continuar comprando el cual redirige al home.  
Además cuenta con un botón "vaciar carrito" para eliminar todos los productos del carrito, si hacemos click en él nos volverá a mostrar el mensaje de alerta cuando no hay produtos en el carrito. 

Para continuar con la compra, teniendo en cuenta que ya tenemos los productos seleccionados con la cantidad correspondiente, hacemos click en "finalizar compra" y nos va a dirigir a un formulario donde se nos pedirá los siguientes datos: nombre, teléfono, mail y repetir mail para confirmar el mail destinatario.  
Todos los campos cuentan con validaciones para que los datos ingresados sean los correctos.  
En el caso de que quisieramos enviar el formulario con los campos vacios o sin respetar las validaciones, nos devolvera una alerta "error, por favor rellena el formulario correctamente". Una vez que completemos todos los datos correctamente nos permitira enviar el formulario.  
Al enviar el formulario se desplegara un modal con el numero de pedido correspondiente a la orden generada, el cual el usuario podra guardar si lo desea. Dentro del modal además del número de pedido podrá encontrar una leyenda comentando lo siguiente "se le enviara un mail con el detalle de su pedido" y al hacer click en "entendido" se simula ese envío de mail. 

Al hacer click en "entendido" simulando enviar el detalle de pedido al mail del usuario, este mismo nos redirigirá a ordenes para poder ver el resumen del pedido.  
Esto fue pensado para poder visualizar el resumen de la orden generada, para ello se busca en firebase por ID la orden que queremos ver y la mostramos en el resumen de compra. 

Otro detalle importante acerca del carrito es que su icon esta visible en toda la experiencia del usuario, cuenta con una lógica para poder mostrar todos los items que se agreguen al carrito.  
Por ejemplo: 2 Auriculares, 4 Joysticks - en el carrito veremos un total de 6 items. 


- ### Ordenes 

Si queremos ingresar a ordenes sin haber cargado una orden previamente nos figurará un mensaje de alerta: "No hay órdenes para mostrar" junto con un boton "elegir productos" que redirige al usuario a home nuevamente, para que este pueda continuar seleccionando sus productos.  
El usuario puede volver a home accediendo a ese botón o mediante el link del logo "valkiria". 

Cuando haya una órden generada aparecerá el resumen de compra del usuario.  
Dentro de la misma podremos ver el número de órden nuevamente, para confirmar que efectivamente estamos mostrando la orden que se generó anteriormente y para mayor información al usuario, el producto seleccionado con su respectiva cantidad y precio unitario, finalizando tendremos el precio total de el/los producto(s) seleccionado(s).  
Y por ultimo un botón "finalizar" que dirigirá al usuario a home, como se mencionó anteriormente también se puede acceder al home a través del logo de la marca. 

