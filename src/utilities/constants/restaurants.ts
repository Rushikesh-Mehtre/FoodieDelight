import { Restaurant } from "../types/types";

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pasta Paradise",
    rating: 4.5,
    location: "New York, NY",
    category: "Italian",
    description: "Authentic Italian pasta dishes made fresh daily.",
    contactNumber: 7303133973,
    deliveryArea: "Manhattan",
    emailId: "contact@pastaparadise.com"
  },
  {
    id: 2,
    name: "Spicy Delight",
    rating: 4.3,
    location: "San Francisco, CA",
    category: "Indian",
    description: "Best Indian spicy dishes that tantalize your taste buds.",
    contactNumber: 7303133973,
    deliveryArea: "Downtown SF",
    emailId: "info@spicydelight.com"
  },
  {
    id: 3,
    name: "Sushi World",
    rating: 4.8,
    location: "Los Angeles, CA",
    category: "Japanese",
    description: "Traditional sushi with a modern twist.",
    contactNumber: 7303133973,
    deliveryArea: "Beverly Hills",
    emailId: "orders@sushiworld.com"
  },
  {
    id: 4,
    name: "Vegan Bites",
    rating: 4.6,
    location: "Austin, TX",
    category: "Vegan",
    description: "Delicious vegan meals made from fresh local produce.",
    contactNumber: 7303133973,
    deliveryArea: "Central Austin",
    emailId: "hello@veganbites.com"
  },
  {
    id: 5,
    name: "Burger Hub",
    rating: 4.2,
    location: "Chicago, IL",
    category: "American",
    description: "Gourmet burgers with a variety of flavors.",
    contactNumber: 7303133973,
    deliveryArea: "Chicago Loop",
    emailId: "contact@burgerhub.com"
  },
  {
    id: 6,
    name: "Noodle House",
    rating: 4.7,
    location: "Seattle, WA",
    category: "Chinese",
    description: "Hand-pulled noodles and authentic Chinese dishes.",
    contactNumber: 7303133973,
    deliveryArea: "Downtown Seattle",
    emailId: "info@noodlehouse.com"
  },
  {
    id: 7,
    name: "Taco Fiesta",
    rating: 4.4,
    location: "Dallas, TX",
    category: "Mexican",
    description: "Street-style tacos with bold, fresh flavors.",
    contactNumber: 7303133973,
    deliveryArea: "Dallas Metro",
    emailId: "contact@tacofiesta.com"
  },
  {
    id: 8,
    name: "Pizza Planet",
    rating: 4.9,
    location: "Orlando, FL",
    category: "Pizza",
    description: "Wood-fired pizzas with a variety of toppings.",
    contactNumber: 7303133973,
    deliveryArea: "Orlando Downtown",
    emailId: "info@pizzaplanet.com"
  },
  {
    id: 9,
    name: "Kebab King",
    rating: 4.1,
    location: "Houston, TX",
    category: "Middle Eastern",
    description: "Succulent kebabs with traditional Middle Eastern spices.",
    contactNumber: 7303133973,
    deliveryArea: "Houston Central",
    emailId: "support@kebabking.com"
  },
  {
    id: 10,
    name: "Sweet Treats",
    rating: 4.3,
    location: "Miami, FL",
    category: "Desserts",
    description: "Handcrafted desserts made with love.",
    contactNumber: 7303133973,
    deliveryArea: "Miami Beach",
    emailId: "hello@sweettreats.com"
  },
  {
    id: 11,
    name: "BBQ Bonanza",
    rating: 4.5,
    location: "Atlanta, GA",
    category: "Barbecue",
    description: "Authentic Southern-style BBQ.",
    contactNumber: 7303133973,
    deliveryArea: "Midtown Atlanta",
    emailId: "contact@bbqbonanza.com"
  },
  {
    id: 12,
    name: "Salad Stop",
    rating: 4.2,
    location: "Denver, CO",
    category: "Healthy",
    description: "Healthy salads made with fresh organic ingredients.",
    contactNumber: 7303133973,
    deliveryArea: "Downtown Denver",
    emailId: "info@saladstop.com"
  },
  {
    id: 13,
    name: "Grill Master",
    rating: 4.6,
    location: "Phoenix, AZ",
    category: "Grill",
    description: "Grilled meats and veggies with signature sauces.",
    contactNumber: 7303133973,
    deliveryArea: "Phoenix City Center",
    emailId: "orders@grillmaster.com"
  },
  {
    id: 14,
    name: "Waffle Wonderland",
    rating: 4.7,
    location: "Nashville, TN",
    category: "Breakfast",
    description: "The best waffles in town with a variety of toppings.",
    contactNumber: 7303133973,
    deliveryArea: "Downtown Nashville",
    emailId: "contact@wafflewonderland.com"
  },
  {
    id: 15,
    name: "Curry Corner",
    rating: 4.3,
    location: "San Diego, CA",
    category: "Indian",
    description: "Traditional Indian curries and tandoori delights.",
    contactNumber: 7303133973,
    deliveryArea: "San Diego Downtown",
    emailId: "support@currycorner.com"
  },
  {
    id: 16,
    name: "Sizzling Sushi",
    rating: 4.8,
    location: "Las Vegas, NV",
    category: "Japanese",
    description: "Exquisite sushi and sashimi prepared by master chefs.",
    contactNumber: 7303133973,
    deliveryArea: "Las Vegas Strip",
    emailId: "info@sizzlingsushi.com"
  },
  {
    id: 17,
    name: "Falafel Factory",
    rating: 4.4,
    location: "Portland, OR",
    category: "Mediterranean",
    description: "Delicious falafel and Mediterranean favorites.",
    contactNumber: 7303133973,
    deliveryArea: "Downtown Portland",
    emailId: "contact@falafelfactory.com"
  },
  {
    id: 18,
    name: "Naan Stop",
    rating: 4.6,
    location: "Washington, D.C.",
    category: "Indian",
    description: "Fresh naan and flavorful Indian dishes.",
    contactNumber: 7303133973,
    deliveryArea: "Capitol Hill",
    emailId: "info@naanstop.com"
  },
  {
    id: 19,
    name: "Dim Sum Delight",
    rating: 4.5,
    location: "Boston, MA",
    category: "Chinese",
    description: "Traditional dim sum served all day.",
    contactNumber: 7303133973,
    deliveryArea: "Chinatown",
    emailId: "contact@dimsumdelight.com"
  },
  {
    id: 20,
    name: "Crepe City",
    rating: 4.7,
    location: "Philadelphia, PA",
    category: "French",
    description: "Delicious sweet and savory crepes made fresh.",
    contactNumber: 7303133973,
    deliveryArea: "Old City Philadelphia",
    emailId: "info@crepecity.com"
  }
];

export default restaurants;
