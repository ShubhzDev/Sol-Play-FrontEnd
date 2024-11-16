import Move from "./Move";

interface Card{
    id : number,
    cardName : string,
    moves : Move[],
}

export default Card;