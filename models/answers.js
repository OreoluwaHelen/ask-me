const answers = (sequelize, DataTypes) => {
  const Answers = sequelize.define('Answers', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Answers.associate = (models) => {
    // associations can be defined here
    Answers.belongsTo(models.Questions, {
      foreignKey: 'questionId',
      as: 'question',
      onDelete: 'CASCADE',
    });
    Answers.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return Answers;
};

export default answers;
