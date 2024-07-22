import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
import ButtonDefault from "../ButtonDefault/ButtonDefault";

interface Task {
    id: string;
    name: string;
    category: string;
    status: boolean;
}

interface RenderTaskProps {
    checkAction: (event: React.MouseEvent<HTMLButtonElement>, taskName: string) => void;
}

function RenderTask({ checkAction }: RenderTaskProps) {
    const [tasks, setTasks] = useState<Task[]>([]);
    
    useEffect(() => {
        async function getTasks(){
            try {
                const response = await axios.get("https://api-todolist-1-hkqa.onrender.com/api/data");
                setTasks(response.data);
            } catch {
                console.log("Erro ao consultar os dados");
            }
        }
        
        getTasks();
    }, []);

    // Ordena as tarefas para que as com status false apareçam primeiro
    const sortedTasks = tasks.sort((a, b) => Number(a.status) - Number(b.status));

    return (
        <>
            {sortedTasks.map(task => (
                <div 
                    key={task.id} 
                    style={{
                        border: '1px solid black', 
                        boxSizing: "border-box", 
                        padding: '12px', 
                        borderRadius: '8px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        flexDirection: "row", 
                        margin: '10px'
                    }}

                    className="responsive-div"
                >
                    <div>
                        <h3 style={{ textDecoration: task.status ? 'line-through' : 'none' }}>{task.name}</h3>
                        <p>{task.category}</p>
                        <p>{task.status ? "Concluída" : "Em Aberto"}</p>
                    </div>
                    {!task.status && (
                        <div>
                            <ButtonDefault 
                                style={{ border: 'none' }} 
                                action={(event) => checkAction(event, task.name)}
                            >
                                <CheckIcon color="success" fontSize="large"/>
                            </ButtonDefault>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default RenderTask;
