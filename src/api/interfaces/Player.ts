import Game from "./Game";
import Move from "./Move";

interface Player{
    id : number,
    discordId : string,
    discordname : string,
    userName : string,
    name : string,
    game : Game[],
    moves : Move[],
}

export default Player;