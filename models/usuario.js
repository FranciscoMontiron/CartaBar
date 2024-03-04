module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  // Methods for JWT and password hashing
  Usuario.prototype.generateAuthToken = function () {
    const token = jwt.sign({ id: this.id }, 'claveSecreta');
    return token;
  };

  Usuario.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  Usuario.beforeCreate(async (usuario) => {
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(usuario.password, salt);
  });

  return Usuario;
};
