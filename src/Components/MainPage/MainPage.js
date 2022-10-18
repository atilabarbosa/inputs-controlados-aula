import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'  

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  function onChangeNome(event){
    //console.log(event.target.value)
    setNome(event.target.value)
  }
  function onChangeIdade(event){
    //console.log(event.target.value)
    setIdade(event.target.value)
  }
  function onChangeEmail(event){
    //console.log(event.target.value)
    setEmail(event.target.value)
  }

  const consoleObjeto = () => {
    const dadosUsuario = {
      nome: nome,
      idade: idade,
      email: email
    }
    console.log(dadosUsuario)
    setNome('')
    setIdade('')
    setEmail('')
  }
  //console.log(`nome:${nome}, idade:${idade}, e-mail:${email}`)
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input 
          type = {'text'}
          placeholder = {'Nome'}
          value={nome}
          onChange = {onChangeNome}
          
          />
        </label>
        <label>
          Idade:
          <Input
          type = {'number'}
          placeholder = {'Idade'}
          value={idade}
          onChange = {onChangeIdade}
          
          />
        </label>
        <label>
          E-mail:
          <Input 
          type = {'email'}
          placeholder = {'usuario@usuario.com'}
          value={email}
          onChange = {onChangeEmail}
          />
        </label>
      <button
      onClick = {consoleObjeto}
      >Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage