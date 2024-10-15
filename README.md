# Pizza Tua Prueba Técnica Flembee (NestJs y NextJs)

Pizza Tua consiste en una aplicación fullstack que proporciona un Dashboard para la gestión de los ingredientes en sus recetas, desarrollado con **Next.js** para el frontend y **NestJS** para el backend. Las funcinalidades y los requisitos técnicos se encuentran en el PDF. 

## Requisitos previos

- **Node.js** (versión 13.x o superior) - [Descargar Node.js](https://nodejs.org/)
- **npm** o **yarn**    
- PostgresSQL - [Descargar](https://www.postgresql.org/)


## Configuración del Backend

Sigue los pasos a continuación para configurar y ejecutar el backend de este proyecto.

### 1. Clona el repositorio y accede al directorio del backend

```bash
$ git clone https://github.com/castilloabraham/PizzaTuaPT.git
$ cd backend
```

### 2. Instala las dependencias
```bash
$ npm install
```

### 3. Configura las variables de entorno

Dentro del directorio backend, crea un archivo llamado .env. Dentro de este archivo, define las siguientes variables de entorno:
```bash
DATABASE_URL="postgresql://<usuario>:<contraseña>@<host>:<puerto>/<nombre_base_de_datos>?schema=public"
```

### 4. Ejecuta las migraciones de la base de datos
```bash
$ npx prisma migrate dev --name init
```

## 5. Compilar y ejecutar el proyecto
```bash
#Desarrollo
$ npm run start
```