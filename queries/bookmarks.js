const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
  try {
    const bookmarks = await db.any("SELECT * from bookmarks");

    return bookmarks;
  } catch (error) {
    return error;
  }
};

const getBookmark = async () => {
  
}

module.exports = {
  getAllBookmarks,
  getBookmark
};
