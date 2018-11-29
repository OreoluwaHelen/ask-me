const user = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {});
  Users.associate = (models) => {
    // associations can be defined here
    Users.hasMany(models.Questions, {
      foreignKey: 'userId',
      as: 'questions',
    });
    Users.hasMany(models.Answers, {
      foreignKey: 'answerId',
      as: 'answers',

    });
  };
  return Users;
};

export default user;
