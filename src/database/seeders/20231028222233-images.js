"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        // Adidas - Superstar ----------------------------------
        {
          file: "Adidas_Superstar.jpeg",
          main: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Superstar-1.jpeg",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Superstar-2.jpeg",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Superstar-3.jpeg",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Superstar-4.jpeg",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Superstar-5.jpeg",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Puma - Cali ----------------------------------
        {
          file: "Puma_Cali.webp",
          main: 1,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Puma_Cali-1.jpeg",
          main: 0,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Puma_Cali-2.jpg",
          main: 0,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Puma_Cali-3.jpg",
          main: 0,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Puma_Cali-4.webp",
          main: 0,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Puma_Cali-5.webp",
          main: 0,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Nike - Air Zoom ----------------------------------
        {
          file: "Nike_Air-Zoom.webp",
          main: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Air-Zoom-1.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Air-Zoom-2.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Air-Zoom-3.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Air-Zoom-4.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Air-Zoom-5.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Reebok - classic Leather----------------------------------
        {
          file: "Reebok_Classic-Leather.jpg",
          main: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Classic-Leather-1.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Classic-Leather-2.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Classic-Leather-3.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Classic-Leather-4.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Classic-Leather-5.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Nike - AirMax 97 ----------------------------------
        {
          file: "Nike_AirMax_97.webp",
          main: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_AirMax_97-1.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_AirMax_97-2.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_AirMax_97-3.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_AirMax_97-4.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_AirMax_97-5.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Nike - React Infinity Run ----------------------------------
        {
          file: "Nike_React-Infinity-Run.jpg",
          main: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_React-Infinity-Run-1.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_React-Infinity-Run-2.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_React-Infinity-Run-3.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_React-Infinity-Run-4.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_React-Infinity-Run-5.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Nike - Joyride Run ----------------------------------
        {
          file: "Nike_Joyride-Run.jpg",
          main: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Joyride-Run-1.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Joyride-Run-2.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Joyride-Run-3.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Joyride-Run-4.webp",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Nike_Joyride-Run-5.jpg",
          main: 0,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Adidas - Ultraboost ----------------------------------
        {
          file: "Adidas_Ultraboost.webp",
          main: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Ultraboost-1.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Ultraboost-2.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Ultraboost-3.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Ultraboost-4.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Ultraboost-5.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Adidas - Stan Smith ----------------------------------
        {
          file: "Adidas_Stan-Smith.webp",
          main: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Stan-Smith-1.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Stan-Smith-2.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Stan-Smith-3.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Stan-Smith-4.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Stan-Smith-5.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Adidas - Gazelle ----------------------------------
        {
          file: "Adidas_Gazelle.webp",
          main: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Gazelle-1.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Gazelle-2.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Gazelle-3.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Gazelle-4.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Adidas_Gazelle-5.webp",
          main: 0,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Reebok - Nano X ----------------------------------
        {
          file: "Reebok_Nano-X.webp",
          main: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Nano-X-1.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Nano-X-2.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Nano-X-3.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Nano-X-4.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Nano-X-5.jpg",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Reebok - Club C ----------------------------------
        {
          file: "Reebok_Club-C.webp",
          main: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Club-C-1.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Club-C-2.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Club-C-3.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Club-C-4.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Club-C-5.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Reebok - Flexagon energy----------------------------------
        {
          file: "Reebok_Flexagon.webp",
          main: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Flexagon-1.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Flexagon-2.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Flexagon-3.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Flexagon-4.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file: "Reebok_Flexagon-5.webp",
          main: 0,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Puma - RS-X ----------------------------------
        {
          file: "Puma_RS-X.webp",
          main: 1,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Puma - Future Rider ----------------------------------
        {
          file: "Puma_Future-Rider.webp",
          main: 1,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Puma - RS-2K ----------------------------------

        {
          file: "Puma_RS-2K.jpg",
          main: 1,
          productId: 3,
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
