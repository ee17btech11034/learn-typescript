/*
const Card = ({name, price, isSpecial =false}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>get this {isSpecial? "special" : "base"} edition at {price}</p>
        </div>
    );
}
export default Card;
*/





interface CardProp {
    name: string;
    price: number;
    isSpecial?: boolean
}


// const Card = ({name:string, price:number, isSpecial =false}) => { //error throw hoga as we can not define like this
const Card = ({name, price, isSpecial =false}: CardProp) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>get this {isSpecial? "special" : "base"} edition at {price}</p>
        </div>
    );
}

export default Card;
