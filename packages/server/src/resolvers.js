import { Meal, Category, User } from "./models.js";
import { meals } from "../data/meals.js";

export const resolvers = {
  Query: {
    meals: async (parent, args) => {
      return await Meal.findAll({
        include: Category,
        order: [["title", "ASC"]],
      });
    },
    meal: async (parent, args) => {
      return await Meal.findByPk(args.id, { include: Category });
    },
    categories: async () => {
      return await Category.findAll({ include: Meal });
    },
    user: async (_, { id }) => await User.findByPk(id),
  },
  Mutation: {
    addMeal: async (parent, args) => {
      const { input } = args;
      await Meal.create(input);
      return { ok: true };
    },
    addUser: async (_, { input }) => {
      await User.create({
        ...input,
        complete: false,
      });
      return {
        success: true,
      };
    },

    updateMeal: async (parent, { id, input }) => {
      await Meal.update(input, {
        where: { id },
      });
      return { ok: true };
    },
    deleteMeal: async (parent, { id }) => {
      await Meal.destroy({ where: { id } });
      return { ok: true };
    },
  },
};
