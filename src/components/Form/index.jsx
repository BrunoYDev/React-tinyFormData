import { useState } from "react"

export const FormData = () => {
    const [inputInfo,setInputInfo] = useState({
        name: "",
        email: "",
        age: ""
    })

    const emptyValues = (inputInfo.name === "" || inputInfo.email === "" || inputInfo.age === "");
    const submit = (e) =>{
        e.preventDefault();
        if(emptyValues){
            alert('PREENCHA TODOS OS CAMPOS !!!');
        }else{
            console.log("Usuario cadastrado com sucesso!");
            setInputInfo({
                name: "",
                email: "",
                age: ""
            })
        }
    }
    return (
        <form onSubmit={submit}>
            <input type="text" placeholder="Nome: " value={inputInfo.name} onChange={(e) => setInputInfo({...inputInfo, name: e.target.value})}/>
            <input type="email" placeholder="Email: " value={inputInfo.email} onChange={(e) => setInputInfo({...inputInfo, email: e.target.value})}/>
            <input type="number" placeholder="Idade: " value={inputInfo.age} onChange={(e) => setInputInfo({...inputInfo, age: e.target.value})}/>
            <button type="submit">Enviar</button>
        </form>
    )
}