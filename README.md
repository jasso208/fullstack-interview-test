# FullstackInterviewTest

Este proyecto fue creado con Angular CLI https://github.com/angular/angular-cli version 12.1.1.

## Servidor de desarrollo

Ejecuta `ng serve` para tener acceso al servidor local de desarrollo. Navega en `http://localhost:4200/`. 

## Podemos ver la demostracion del proyecto en la siguiente url.

http://jasso208.pythonanywhere.com/

## ¿Como funciona?

Este test fue creado para consultar la informacion de las ramas, commits y pull request del repositorio "fullstack-interview-test" del usuario "jasso208". Una vez que estemos ya en la pagina, en el formulario que aparece en el encabezado debemos ingresar la información del repositorio que deseamos consultar.

    usuario github: jasso208
    repositorio: fullstack-interview-test

Una vez ingresado estos valores podemos empezar a consultar la informacion navegando con el menu que se encuentra en el lado izquierdo.

## Consultar otros repositorios

Para consultar un repositorio diferente al anteriormente mencionado solo cambiamos los valores usuario github y repositorio. 

## Crear Pull Request de otros repositorios

Como Github require autenticarse para poder modificar el repositorio, debemos seguir los pasos mencionados en aqui (https://docs.github.com/es/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) para generar un token. Una vez que contamos con el token abrimos el archivo environment.ts de nuestro proyecto y cambiamos los valores de "usuarioGitHub" y "password" por los valores del nuevo repositorio.



