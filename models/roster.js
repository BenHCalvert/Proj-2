module.exports = function(sequelize, DataTypes) {
  const Roster = sequelize.define("Roster", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
  });

  Roster.associate = function (models) {
    models.Student.belongsToMany(models.Team, {
      through: 'Roster',
      foreignKey: 'studentId',
      otherKey: 'teamId',
    });

    models.Team.belongsToMany(models.Student, {
      through: 'Roster',
      foreignKey: 'teamId',
      otherKey: 'studentId',
    });
  }
  return Roster;
};