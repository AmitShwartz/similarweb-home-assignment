module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("categories", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_view: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    revenue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    units_sold: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Category;
};
