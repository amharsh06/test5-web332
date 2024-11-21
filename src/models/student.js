const { DataTypes } = require("sequelize");
const sequelize = require("./index"); // Import the sequelize instance

// Define the Student model
const Student = sequelize.define("Student", {
  student_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  enrollment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  courses: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
});

// Sync the model with the database (force: false to prevent overwriting)
sequelize.sync({ force: false }).then(() => {
  console.log("Student table synced");
}).catch((error) => {
  console.error("Error syncing student table:", error);
});

module.exports = Student; // Export the model
