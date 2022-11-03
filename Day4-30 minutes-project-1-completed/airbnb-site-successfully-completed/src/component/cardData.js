import swiming from "./../images/card/image 12.png";
import wedding from "./../images/card/wedding-photography 1.png";
import mountain from "./../images/card/mountain-bike 1.png";
import kitchen from "./../images/card/kitchen.png";
export default  [
  {
    id: 1,
    title: "Life lessons with Katie Zaferes",
    price: 136,
    coverImage: swiming,
    status: {
      raitng: 4.5,
      reviewCount:`(${50})`,
    },
    location: "online",
    openSports: 0,
  },

  {
    id: 2,
    title: "Life lessons with Katie Zaferes",
    price: 136,
    coverImage: wedding,
    status: {
      raitng: 5.0,
      reviewCount: `(${100})`,
    },
    location: "online",
    openSports: 27,
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    price: 136,
    coverImage: mountain,
    status: {
      raitng: 5.0,
      reviewCount: `(${200})`,
    },
    location: "online",
    openSports: 27,
  },
  {
    id: 4,
    title: "kitchen with shaheen",
    price: 500,
    coverImage: kitchen,
    status: {
      raitng: 4.9,
      reviewCount: `(${500})`,
    },
    location: "India",
    openSports: 27,
  },
];


