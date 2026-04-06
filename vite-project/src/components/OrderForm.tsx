import { useState } from "react";

interface OrderFormprops {
    onSubmit(order: {name: string; cups: number}): void
}

export const OrderForm = ({onSubmit}: OrderFormprops) => {
    
    // const [name, setName] = useState(0) // name is any type here so better to be on safer side
    // const [name, setName] = useState("Ginger") // any type
    const [name, setName] = useState<string>("Ginger") //
    const [cups, setCups] = useState<number>(1) 
    
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault()
        onSubmit({name, cups})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name_area"></label>
            <input type="text" value={name} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            
            
            <label htmlFor="cup_area"></label>
            <input type="number" value={cups} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value))}/>

            <button type="submit">Submit</button>
        </form>
    );
}

