function ExportDb(sequelize, DataTypes) {
  const Student = sequelize.define('Student', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    gender: {
      type: DataTypes.ENUM('boy', 'girl', 'other'),
      allowNull: false,
    },
    allergies: DataTypes.STRING,
  });

  Student.associate = function (models) {
    models.Student.belongsToMany(models.Adult, {
      through: 'Family',
      foreignKey: 'studentId',
    });

    models.Student.belongsToMany(models.Team, {
      through: 'Roster',
      foreignKey: 'studentId',
    });
  };
  return Student;
};

module.exports = ExportDb;