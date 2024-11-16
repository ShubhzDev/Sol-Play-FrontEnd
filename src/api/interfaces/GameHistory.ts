import Move from "./Move";

interface GameHistory{
    id : number,
    gameId : number,
    game : GameHistory,
    moves : Move[],
}

export default GameHistory;