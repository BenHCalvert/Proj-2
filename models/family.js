module.exports = function(sequelize, DataTypes) {
  const Family = sequelize.define("Family", {
    adult_type: {
      type: DataTypes.ENUM('Parent','Guardian','Emergency Contact'),
      allowNull: false,
    }
  });

  return Family;
};