function obtenerPublicaciones() {
  return fetch('https://dev.to/api/articles')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener las publicaciones');
      }
      return response.json();
    })
    .then(data => data) 
}

export default obtenerPublicaciones;