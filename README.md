# Auditoría de una aplicación web — Clase 12

Aplicación didáctica **deliberadamente vulnerable** para practicar una auditoría de código en un entorno local.

## Requisitos
- Node.js 20 o superior
- npm

## Instalación y ejecución
```bash
npm install
npm start
```
Abrir http://127.0.0.1:3000

La aplicación escucha únicamente en `127.0.0.1` para evitar exponerla a la red.

## Objetivo del ejercicio
Revisar el código, registrar hallazgos, explicar el riesgo, proponer correcciones y definir pruebas de verificación.

## Archivos
- `server.js`: rutas y lógica del backend.
- `public/index.html`: interfaz.
- `public/app.js`: lógica del navegador.
- `public/styles.css`: estilos.
- `docs/consigna-estudiantes.md`: consigna sin soluciones.
- `docs/guia-docente.md`: guía docente con los hallazgos esperados.

## Reglas de uso
- Usar exclusivamente en el entorno local de práctica.
- No publicar el servidor ni exponerlo a Internet.
- No probar técnicas contra sistemas de terceros.
- La carpeta `docs/guia-docente.md` contiene las soluciones: no distribuirla con la consigna si querés mantener los hallazgos ocultos.
