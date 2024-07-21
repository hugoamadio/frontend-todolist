import React, { useState } from "react"
import ButtonDefault from "../components/ButtonDefault/ButtonDefault"
import Modal from "../components/Modal/Modal"
import RenderTask from "../components/RenderTask/RenderTask"
import axios from "axios";

const API_URL = "https://api-todolist-1-hkqa.onrender.com/api";

function Home() {
  const [newTask, setNewTask] = useState<boolean>(false);
  const [nameTask, setNameTask] = useState<string>("");
  const [categorie, setCategorie] = useState<string>("Trabalho");

  function openModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setNewTask(true);
  }

  function closeModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setNewTask(false);
  }

  async function checkTask(
    event: React.MouseEvent<HTMLButtonElement>,
    taskName: string
  ) {
    event.preventDefault()
    try{
        await axios.put(`${API_URL}/task/${taskName}`)
        window.location.reload()
    } catch(error){
        console.error("Erro ao atualizar tarefa", error)
    }
  }

  async function createTask(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try{
        await axios.post(`${API_URL}/task`, {
            name: nameTask,
            category: categorie
        })
        setNameTask('')
        window.location.reload()
    } catch(error){
        console.error("Erro ao criar tarefa", error)
    }
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameTask(event.target.value);
  }

  function handleCategorie(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategorie(event.target.value);
  }

  return (
    <>
      <form className="form-primary">
        <div
          style={{
            width: "99%",
            display: "flex",
            justifyContent: "end",
            marginBottom: "30px",
          }}
        >
          <ButtonDefault
            width="150px"
            bgColor="#00ed00"
            hoverColor="#00ff00"
            action={openModal}
          >
            Nova Tarefa
          </ButtonDefault>
        </div>
        <div>
          <RenderTask checkAction={checkTask} />
        </div>
      </form>
      {newTask && (
        <Modal>
          <div style={{ marginBottom: "30px" }}>
            <h2>Nova Tarefa</h2>
          </div>
          <div>
            <label>Nome: </label>
            <input type="text" value={nameTask} onChange={handleNameChange} />
          </div>
          <div>
            <label>Categoria: </label>
            <select value={categorie} onChange={handleCategorie}>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudos">Estudos</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
            <ButtonDefault
              bgColor="#ff0000"
              width="80px"
              hoverColor="#ff0000ba"
              action={closeModal}
            >
              Fechar
            </ButtonDefault>
            <ButtonDefault
              bgColor="#00ed00"
              width="120px"
              hoverColor="#00ff00"
              action={createTask}
            >
              Cadastrar
            </ButtonDefault>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Home;
