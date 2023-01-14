// import datatype sequelize
const { DataTypes } = require('sequelize');

// import config database
const db = require('../config/database');

const Patients = db.define(
  'patients',
  {
    //* Model attributes
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    address: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    in_date_at: {
      type: DataTypes.DATE,
    },
    out_date_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,

    created_at: 'updateTimestamp',
    updated_at: 'updateTimestamp',
  }
);

// export Patients
module.exports = Patients;
