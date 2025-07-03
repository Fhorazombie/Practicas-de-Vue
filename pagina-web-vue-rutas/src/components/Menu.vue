<template>
        <nav>
            <ul>
                <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="/servicios">Servicios</router-link></li>
            </ul>
        </nav>
</template>

<style>
nav ul {
    list-style-type: none;
    padding: 0;
}
nav ul li {
    display: inline;
    margin: 0 15px;
}
nav ul li a {
    text-decoration: none;
    color: #333;
}
nav ul li a:hover {
    text-decoration: underline;
}
nav ul li a.router-link-active {
    font-weight: bold;
    color: #007BFF;
}
nav ul li a.router-link-exact-active {
    font-weight: bold;
    color: #0056b3;
}
</style>