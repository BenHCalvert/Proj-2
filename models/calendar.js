module.exports = function(sequelize, DataTypes) {
    const Calendar = sequelize.define("Calendar", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      event_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      event_datetime: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  
    Calendar.associate = function (models) {
      models.Student.belongsTo(models.Team, {
        foreignKey: 'teamId'
      }); 
      
    };
  
  
    return Calendar;
  };