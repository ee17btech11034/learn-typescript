import type { UserType } from "../types/type.ts"; // declaring that imported type nopt a functionality


interface Userprops{
    items: UserType[]
}
const User = ({items}: Userprops) => {
    return (
        <div>
            Items: {items.map((e: UserType)=>( // provide key if a component
                e.name
            ))}
        </div>
    );
}

export default User;
