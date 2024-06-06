import { useState } from "react";


export function CreateTodo() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    return <div>
        <input type="text " placeholder="Title" onChange={function(e){
            const value=e.target.value;
            settitle(e.target.value);
        }
        }></input><br /><br />
        <input type="text " placeholder="description" onChange={function(e){
            const value=e.target.value; 
            setdescription(e.target.value);
        }
        }></input><br /><br />
        <button onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "ContentType": "application/json"
                }
            })

                .then(async (res) => {
                    const json = await res.json({msg:"HI"});
                    alert("Todo Added")
                })
        }}>Add A todo </button><br /><br />
    </div>

}