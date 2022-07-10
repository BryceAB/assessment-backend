const users = [];
let globalId = 1;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A feather in the hand is better than a bird in the air",
      "A fresh start will put you on your way.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  getUsers: (req, res) => {
    res.status(200).send(users);
  },
  deleteUser: (req, res) => {
    const existingId = +req.params.id;

    let index = users.findIndex((user) => user.id === existingId);
    users.splice(index, 1);
    res.status(200).send(users);
  },
  createUser: (req, res) => {
    const { firstName, lastName, age } = req.body;

    let newUser = {
      firstName,
      lastName,
      age,
      id: globalId,
    };
    users.push(newUser);
    res.status(200).send(users);
    globalId++;
  },
  updateUser: (req, res) => {
    const existingId = +req.params.id;
    let index = users.findIndex((user) => user.id === existingId);
    users[index].age++;
    res.status(200).send(users);
  },
};
