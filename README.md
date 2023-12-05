#tlp1-proyecto-integrador
BY: Agustin Mazza.

PROBLEMÁTICA: 
Dificultad para quienes están integrándose al mercado laboral por primera vez para conseguir trabajo, ya sea por falta de información, inexperiencia o 
negligencias tanto de los empleados como de los empleadores. 

PROPUESTA: 
Nuestro proyecto tiene el nombre de Job Unite y se trata de una plataforma web que busca ser una red social en la cual los usuarios, 
tanto postulantes como empleadores puedan darse a conocer e interactuar entre sí.

REQUISITOS PARA LA INSTALACIÓN:
#Entornos de configuración y gestión de servidores locales (EJ: wampp o xampp)
#NodeJs
#Git

MODO DE INSTALACIÓN:
#1-Clonar el repositorio.
#2-En el directorio "./server/" renombrar el archivo ".example.env" y colocar las variables de entorno en el mismo, la base de datos debe ser SQL 
#3-Abrir una terminal y ejecutar el comando "npm i" en los directorios "./server/" y "./client/
#4-En una terminal ejecutar el comando "npm run dev" tanto en el directorio "./server/" como "./client/"

MODO DE USO:
#Registro de usuarios.
Debes completar un registro para acceder a las funcionalidades de la app.

#Roles.
Dependiendo del rol tendran mayor o menores capacidades. 
-Postulantes
-Empleadores
-Particulares (menor cantidad de capacidades)

#Personalización de perfil.
Rellenar los campos con información personal.

#Subida de archivos.
Los usuarios pueden subir archivos con los siguientes formatos:
-pdf
-docx
-xlsx
-pptx
-imagenes en multiples formatos

#Creacion de posteos.
La principal forma de darse a conocer, deben tener un titulo y cuerpo, opcionalmente una imagen.

#Sala de chat.
Los usuarios pueden entrar a una sala de chat global con otros usuarios registrados

#Notificaciones.
Los usuarios recibiran diferentes notificaciones, de momento solo cuando su contraseña a sido restaurada.

#Filtros de posteos.
Se podran filtrar los posteos en base a diferentes campos, siendo estos:
-rubro
-localidad
-rol
-rango etareo

#Busqueda de usuarios
-Se dara la capacidad a los usuarios de buscar a otros mediante una barra de busqueda, simplemente deben ingresar el nombre deñ
usuario que desean encontrar y luego elegirlo entre los resultados para ser redireccionados a su perfil
-También puedes acceder al perfil de otros usuarios haciendo click sobre el nombre de estos ya sea en los posteos como en la lista de usuarios.
#Soporte
Al hacer click sobre el correo de la plataforma se abrira un formulario en el cual se debera introducir el nombre de usuario,
correo y la inquietud que desee solucionar

#Eliminación de archivos 
Los usuarios pueden eliminar los archivos y posteos realizados, sin embargo, este proceso no se puede revertir.

#Eliminación de cuenta
Al igual que la de archivos, este proceso es irreversible.

#Duración de las sesiones
una hora.
