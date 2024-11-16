import GameHistory from "./GameHistory";
import Player from "./Player";

enum GameStatus{
    ACTIVE,
    FINISHED,
    PENDING,
  }

interface Game{
    gameId : number,
    players : Player[],
    gameHistory : GameHistory,
    winner : WindowEventHandlers,
    gameType : GamepadMappingType,
    gameStatus : GameStatus,
}

export default Game;