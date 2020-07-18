// Creating our Meditation model
module.exports = function(sequelize, DataTypes) {
    const Meditation = sequelize.define("Meditation", {
      // date column
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
         // value column
         value: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    });
  };

  return Meditation;
};
