'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Livro.belongsTo(models.Editora, {
        foreignKey: 'fk_editora',
        as: 'editora'
        });
        // Definindo o relacionamento com a tabela Categoria
        Livro.belongsTo(models.Categoria, {
        foreignKey: 'fk_categoria',
        as: 'categoria'
        });
        
        Livro.belongsTo(models.Autor, {
          foreignKey: 'fk_autor',
          as: 'autor'
        });
    }
  }
  Livro.init({
    fk_editora: DataTypes.INTEGER,
    fk_categoria: DataTypes.INTEGER,
    fk_autor: DataTypes.INTEGER,
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};