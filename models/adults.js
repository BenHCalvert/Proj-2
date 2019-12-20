module.exports = function(sequelize, DataTypes) {
  const Adult = sequelize.define("Adult", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Adult.associate = function (models) {
    models.Adult.belongsToMany(models.Student, {
      through: 'Family',
      foreignKey: 'adultId',
    });
  }
  return Adult;
};