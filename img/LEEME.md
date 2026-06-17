# Carpeta de imágenes — Creaciones U gu-

Coloca aquí los archivos de imagen y actualiza el HTML con las rutas correctas.

## Archivos esperados

| Archivo            | Uso en HTML                           | Dimensiones sugeridas |
|--------------------|---------------------------------------|-----------------------|
| `logo.png`         | Logotipo en el navbar (izquierda)     | 200 × 200 px (cuadrado o circular) |
| `pluma.png`        | Imagen flotante en la sección Hero    | 300 × 300 px con fondo transparente (.png) |
| `producto1.jpg`    | Imagen del Producto 1                 | 600 × 500 px |
| `producto2.jpg`    | Imagen del Producto 2                 | 600 × 500 px |
| `producto3.jpg`    | Imagen del Producto 3                 | 600 × 500 px |

## Cómo reemplazar el logotipo SVG temporal

En `index.html`, dentro de `.nav-logo`, reemplaza el bloque `<svg>...</svg>` con:

```html
<img src="img/logo.png" alt="Logotipo Creaciones U gu-" />
```

## Cómo reemplazar la pluma flotante SVG

En `index.html`, dentro de `.hero-feather`, reemplaza el bloque `<svg>...</svg>` con:

```html
<img src="img/pluma.png" alt="Pluma decorativa" />
```

La animación flotante (`float`) y el efecto de seguimiento del cursor
seguirán funcionando automáticamente con la imagen real.

## Formatos recomendados

- **Logo** → PNG con fondo transparente
- **Pluma** → PNG con fondo transparente (para que se vea el degradado de fondo)
- **Productos** → JPG o WebP para mejor rendimiento

## Cómo agregar imágenes a los productos

En `index.html`, dentro de cada `.product-img`, reemplaza el bloque
`.product-img-placeholder` con una etiqueta `<img>`:

```html
<img src="img/producto1.jpg" alt="Nombre del producto" />
```
