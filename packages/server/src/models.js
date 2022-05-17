import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connection.js";
import { meals, categories } from "../data/meals.js";

const { STRING, FLOAT, INTEGER } = DataTypes;

class Meal extends Model {}

Meal.init(
  {
    id: { type: INTEGER, autoincrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
    imgsrc: { type: STRING, allowNull: true },
    description: { type: STRING, allowNull: false },
    price: { type: FLOAT, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "meal",
      plural: "meals",
    },
  }
);

class Category extends Model {}

Category.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "category",
      plural: "categories",
    },
  }
);

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    zip: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
  }
);

Meal.belongsTo(Category);
Category.hasMany(Meal);

await dbConnection.sync({ force: true });

await Category.bulkCreate(categories);
await Meal.bulkCreate(
  meals.map((m) => {
    const { id, ...meal } = m;
    return meal;
  })
);

export { Meal, Category, User };
