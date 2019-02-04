import { combineReducers } from "redux";
import cards from "./Cards";
import lists from "./Lists";
import boards from "./Boards";
import currentBoard from "./CurrentBoard";

export default combineReducers({
  cardsById: cards,
  listsById: lists,
  boardsById: boards,
  currentBoardId: currentBoard
});
