import GameHistory from "./GameHistory";

interface Move{
    id : number,
    playerId : number,
    player : PlaybackDirection,
    cardId : Int16Array,
    card : CanvasDrawImage,
    gameHistoryId : number,
    gameHistory : GameHistory,
}

export default Move;