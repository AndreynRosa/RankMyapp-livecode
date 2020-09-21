const rickAndMortyService = require("../service/RickAndMortyService");

const url = require('url')

module.exports = {
  async teste(req, res) {
    const page = url.parse(req.url).query;
    // console.log(page);
    const rickAndMortyData = await rickAndMortyService.testes(page);
    console.log("rickAndMortyData");
    return res.json(rickAndMortyData);
  },
};
