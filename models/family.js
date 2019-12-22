module.exports = function(sequelize, DataTypes) {
  const Family = sequelize.define("Family", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    adult_type: {
      type: DataTypes.ENUM('Parent','Guardian','Emergency Contact'),
      allowNull: false,
    }
  });

  Family.associate = function (models) {
    models.Student.belongsToMany(models.Adult, {
      through: 'Family',
      foreignKey: 'studentId',
      otherKey: 'adultId',
    });

    models.Adult.belongsToMany(models.Student, {
      through: 'Family',
      foreignKey: 'adultId',
      otherKey: 'studentId',
    });
  }
  return Family;
};