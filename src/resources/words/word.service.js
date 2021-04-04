const wordRepo = require('./word.db.repository');

const getAll = async conditions => wordRepo.getAll(conditions);
const getAllGroup = async conditions => wordRepo.getAllGroup(conditions);

const get = async wordId => {
  const word = await wordRepo.get(wordId);

  return word;
};

module.exports = { getAllGroup, getAll, get };
