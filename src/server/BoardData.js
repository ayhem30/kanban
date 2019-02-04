import { normalize, schema } from "normalizr";

// This function takes the tree shaped boards and returns a flat structure more suitable to a redux store.
const normalizeBoards = boards => {
  const card = new schema.Entity("cardsById", {}, { idAttribute: "_id" });
  const list = new schema.Entity(
    "listsById",
    { cards: [card] },
    { idAttribute: "_id" }
  );
  const board = new schema.Entity(
    "boardsById",
    { lists: [list] },
    { idAttribute: "_id" }
  );
  const { entities } = normalize(boards, [board]);
  return entities;
};

// Fetch board data and append to req object as intialState which will be put inside redux store on the client
const BoardData = () => (req, res, next) => {
  req.initialState = normalizeBoards({});
  next();
};

export default BoardData;
