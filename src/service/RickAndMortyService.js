const axios = require("axios");

module.exports = {
  async testes(page) {
    const resp = await axios.get(
      `https://rickandmortyapi.com/api/character?${page}`
    );
    return resp.data;
  },
};
