module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define("Team", {
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('girls','boys','co-ed'),
      allowNull: false,
    },
  });

  Team.associate = function (models) {
    models.Team.belongsToMany(models.Student, {
      through: 'Roster',
      foreignKey: 'teamId',
    });
  };
  return Team;
};