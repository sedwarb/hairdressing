# hairdressing

#### Endpoints del projecto:

- **Crear:**

  **Usuario:** http://localhost:3001/user
  
  Este es un POST que envia un body
  
  **Servicio:** http://localhost:3001/service
  
  Este es un POST que envia un body
  
  **Trabajador:** http://localhost:3001/worker
  
  Este es un POST que envia un body
  
  **Servicios realizados:** http://localhost:3001/entries
  
  Este es un POST que envia un body
  
 
- **Mostrar datos:**

  **Usuarios:** http://localhost:3001/user
  
  Este GET obtiene todos los usuarios
  
  **Servicios:** http://localhost:3001/service
  
  Este GET obtiene todos los servicios
  
  **Trabajadores:** http://localhost:3001/worker
  
  Este GET obtiene todos los trabajadores
  
  **Servicios realizados:**
  
  **Por fecha:** http://localhost:3001/entries?dateIni=2021-01-03&&dateEnd=2021-01-03
  
  Este GET obtiene todos los Servicios en un rango de fecha determinado pasado por query, donde
  dateIni es la fecha inicial y dateEnd la fecha final a consultar
  
  **Por fecha y Trabajador:** http://localhost:3001/entries?dateIni=2021-01-03&&dateEnd=2021-01-03&&workerId=1143961948
  
  En este GET se agrega workerId que es el Id del trabajador
  
  **Por fecha y Usuario:** http://localhost:3001/entries?dateIni=2022-06-24&&dateEnd=2022-06-24&&phoneNumber=3206707858
  
  En este GET se agrega phoneNumber que es el Id del usuario
