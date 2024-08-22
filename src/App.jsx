// import { fromJSON } from "postcss";
import { useState } from "react"

export default function App() {
    const [result , setResult] = useState({})


    function handleSubmit(e) {
        e.preventDefault();
        async function getUserData() {
            try {
                const data = await fetch('/api/result', {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body:JSON.stringify({number: e.target.input.value})
                }).then(res => res.json())
                // setResult(data[1]);
                console.log(data);
                setResult(data[0]);
            }
            catch(e){
                console.error(e)
            }
        }
        getUserData()
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="input"/>
            <button type="submit">submit</button>
        </form>
        <ul>
        <li>
            {result.SERIE}
        </li>
        <li>
            {result.Moy_Bac}
        </li>
        </ul>
        </div>
    )
}