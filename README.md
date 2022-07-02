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
  
  **Por fecha:** http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-06-02%2023:59:59.110%20-0500
  
  Este GET obtiene todos los Servicios en un rango de fecha determinado pasado por query, donde
  dateIni es la fecha inicial y dateEnd la fecha final a consultar
  
  **Por fecha y Trabajador:** http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-06-02%2023:59:59.110%20-0500&&workerId=1143961948
  
  En este GET se agrega workerId que es el Id del trabajador
  
  **Por fecha y Usuario:** http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-07-01%2023:59:59.110%20-0500&&phoneNumber=3006007050
  
  En este GET se agrega phoneNumber que es el Id del usuario
  
  **Citas:**
  
  **Por fecha:** http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-07-01%2023:59:59.110%20-0500&&entry=meeting
  
  Este GET obtiene todas las Citas en un rango de fecha determinado pasado por query, donde dateIni es la fecha inicial y dateEnd la fecha final a consultar, y entry=meeting indica que es una cita

  **Por fecha y trabajador:** http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-07-01%2023:59:59.110%20-0500&&entry=meeting&&workerId=1143961948

  Este GET obtiene todas las Citas en un rango de fecha determinado pasado por query, donde dateIni es la fecha inicial y dateEnd la fecha final a consultar, entry=meeting indica que es una cita y workerId para filtrar por trabajador

 **Nota:** Las citas se agendan y luego se puede convertir en una **entrada** si se realiza se cambia el campo **entryType** a entry, si la cita es cancellada se debe cambiar el **entryType** a cancelled
