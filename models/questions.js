const question = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Questions.associate = (models) => {
    // associations can be defined here
    Questions.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'questioner',
    });
    Questions.hasMany(models.Answers, {
      foreignKey: 'questionId',
      as: 'answers',
    });
  };
  return Questions;
};

export default question;
