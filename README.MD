Wine Sipper
Bienvenido a Wine Sipper, una aplicación que te permite explorar y registrar tus catas de vino. Wine Sipper está compuesto por dos partes principales: el cliente y el servidor. El cliente está construido utilizando Vite, React y JavaScript, mientras que el servidor utiliza Node.js, Express y MySQL2. Esta aplicación te permite realizar las siguientes acciones:

Registro de Usuarios: Los usuarios pueden registrarse en Wine Sipper proporcionando su información básica.

Inicio de Sesión: Los usuarios registrados pueden iniciar sesión en la aplicación para acceder a funcionalidades adicionales.

Registro de Catas: Los usuarios pueden registrar información sobre catas de vino.

Listado de Catas: Los usuarios pueden ver una lista de todas las catas de vino que han registrado.

Configuración del Proyecto
Cliente (Client)
El cliente de Wine Sipper se encuentra en la carpeta client. Para configurar y ejecutar el cliente, sigue estos pasos:

Asegúrate de tener Node.js instalado en tu sistema.

Abre una terminal en la carpeta client.

Ejecuta el siguiente comando para instalar las dependencias:

bash
Copy code
npm install
Después de que se completen las instalaciones, puedes iniciar el cliente con el siguiente comando:

bash
Copy code
npm run dev
Esto lanzará la aplicación cliente en modo de desarrollo en http://localhost:5173.

Servidor (Server)
El servidor de Wine Sipper se encuentra en la carpeta server. Para configurar y ejecutar el servidor, sigue estos pasos:

Asegúrate de tener Node.js y MySQL instalados en tu sistema.

En la carpeta server, crea un archivo .env para configurar las variables de entorno necesarias. Aquí hay un ejemplo de archivo .env:

env
Copy code
PORT=8383
DB_HOST=localhost
DB_NAME=
DB_USER=
DB_PASSWORD=
TOKEN_SECRET=

Asegúrate de agregar en tus variables de entorno los datos correpsondientes.

Abre una terminal en la carpeta server.

Ejecuta el siguiente comando para instalar las dependencias:

bash
Copy code
npm install
Después de que se completen las instalaciones, puedes iniciar el servidor con el siguiente comando:

bash
Copy code
npm start
Esto lanzará el servidor en http://localhost:8383.


Contacto
Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto conmigo marianojimenezperez1@gmail.com

¡Disfruta explorando y registrando tus catas de vino con Wine Sipper!
