const Dragon = require("./Dragon");

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }
}

try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
  }
