const fetch = require("node-fetch");

class User {
  async getUser(req, res) {
    const user = req.params.user;

    const result = await fetch(`https://api.github.com/users/${user}`);
    const resultJson = await result.json();

    return res.json({
      login: resultJson.login,
      public_repos: resultJson.public_repos,
      url: resultJson.url
    });
  }
}

module.exports = User;
