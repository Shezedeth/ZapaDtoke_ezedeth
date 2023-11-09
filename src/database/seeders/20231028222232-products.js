"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          title: "Superstar",
          description:
            "Zapatillas Adidas clásicas con el icónico diseño de las tres rayas.",

          sectionId: 1,
          categoryId: 2,
          discount: 0,
          price: 59000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cali",
          description: "Zapatillas Puma con estilo vintage y suela gruesa.",

          sectionId: 1,
          categoryId: 3,
          discount: 0,
          price: 39000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Air Zoom",
          description:
            "Zapatillas  ligeras con tecnología Air Zoom para una mayor respuesta en la pisada.",

          sectionId: 1,
          categoryId: 1,
          discount: 0,
          price: 69000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Classic Leather",
          description: "Zapatillas Reebok de cuero clásicas con diseño retro.",

          sectionId: 1,
          categoryId: 4,
          discount: 0,
          price: 59000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Air Max 97",
          description:
            "Zapatillas  deportivas con tecnología de amortiguación Air Max.",

          sectionId: 1,
          categoryId: 1,
          discount: 0,
          price: 70000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "React Infinity Run",
          description:
            "Zapatillas  de running con amortiguación React para una experiencia suave.",

          sectionId: 1,
          categoryId: 1,
          discount: 0,
          price: 72000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Joyride Run",
          description:
            "Zapatillas  con sistema de amortiguación Joyride para una pisada suave y cómoda.",

          sectionId: 1,
          categoryId: 1,
          discount: 0,
          price: 72000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ultraboost",
          description:
            "Zapatillas Adidas de running con tecnología Ultraboost para mayor comodidad y retorno de energía.",

          sectionId: 1,
          categoryId: 2,
          discount: 0,
          price: 68000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Stan Smith",
          description:
            "Zapatillas Adidas de estilo retro con diseño icónico y suela de goma.",

          sectionId: 1,
          categoryId: 2,
          discount: 0,
          price: 66000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gazelle",
          description:
            "Zapatillas Adidas clásicas de ante con detalles en contraste.",

          sectionId: 1,
          categoryId: 2,
          discount: 0,
          price: 75000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nano X",
          description:
            "Zapatillas Reebok de entrenamiento versátiles y resistentes para cualquier actividad.",

          sectionId: 1,
          categoryId: 4,
          discount: 0,
          price: 71000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Club C",
          description:
            "Zapatillas Reebok de estilo clásico con diseño limpio y detalles en contraste.",

          sectionId: 1,
          categoryId: 4,
          discount: 0,
          price: 68000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Flexagon Energy",
          description:
            "Zapatillas Reebok versátiles ideales para entrenamiento con un diseño ligero y cómodo.",

          sectionId: 1,
          categoryId: 4,
          discount: 0,
          price: 76000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "RS-X",
          description:
            "Zapatillas Puma de estilo retro con tecnología de amortiguación RS.",

          sectionId: 1,
          categoryId: 3,
          discount: 0,
          price: 71000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Future Rider",
          description:
            "Zapatillas Puma inspiradas en los estilos de los años 80 con un toque moderno.",

          sectionId: 1,
          categoryId: 3,
          discount: 0,
          price: 70000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "RS-2K",
          description:
            "Zapatillas Puma con diseño futurista y detalles audaces.",

          sectionId: 1,
          categoryId: 3,
          discount: 0,
          price: 74000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
