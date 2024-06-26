const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

class Ingresso extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id_ingresso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_evento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'eventos',
          key: 'id_evento'
        }
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id_usuario'
        }
      },
      id_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'compras',
          key: 'id_compra'
        }
      },
      data_compra: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      codigo_ingresso: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      status: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'ativo'
      }
    }, {
      sequelize,

    });

    return this;
  }
}

module.exports = Ingresso;
