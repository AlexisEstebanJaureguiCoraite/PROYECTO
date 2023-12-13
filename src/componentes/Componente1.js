import React from 'react'

export const Componente1 = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index1.html">Inicio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index2.html">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index3.html">Metodología</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index4.html">Cursos</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Material
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="index5.html">Libros</a></li>
                  <li><a class="dropdown-item" href="index6.html">Videos</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index7.html">Registrarse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index8.html">Promociones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index9.html">Sucursales</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index10.html">Creditos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

