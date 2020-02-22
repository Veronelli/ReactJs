import React from 'react'
import ReactDOM from 'react-dom'

//objeto

const user = {
    'name': 'Facundo',
    'lastname': 'Veronelli',
    'edad': 19,
    'avatar': 'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg'

}

//Funciones

function getName(user){

    return `${user.name} ${user.lastname}`

}

function getGreeting(user){

    if(user){

        return <h1> Hello {getName(user)}</h1>

    }
    else{

        return <h1>Helle anonimous</h1>

    }

}

//Imprecion en la pagina

const element = (

<div>{getGreeting(user)}
<img src={user.avatar}/>
</div>

)

//Ubicar el contenido

const container = document.getElementById('root')



//ReactDOM.render(__QUE__,__DONDE)
ReactDOM.render(element, container)
