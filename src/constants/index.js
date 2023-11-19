import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  popularShoe1,
  popularShoe2,
  popularShoe3,
  popularShoe4,
  popularShoe5,
  popularShoe6,
  popularShoe7,
  popularShoe8,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    bigShoe: bigShoe1,
  },
  {
    bigShoe: bigShoe2,
  },
  {
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imageURL: popularShoe1,
    name: "Nike Hot Step Air Terra Drake NOCTA Black",
    price: "$239.95",
    rate: "4.4",
  },
  {
    imageURL: popularShoe2,
    name: "Nike Air Max 1 Patta Waves Monarch",
    price: "$299.95",
    rate: "4.5",
  },
  {
    imageURL: popularShoe3,
    name: "Jordan 1 Retro High Mocha",
    price: "$499.95",
    rate: "4.7",
  },
  {
    imageURL: popularShoe4,
    name: "Yeezy Boost 700 Wave Runner",
    price: "$525.95",
    rate: "4.9",
  },
  {
    imageURL: popularShoe5,
    name: "Yeezy Slide Azure",
    price: "$189.95",
    rate: "4.4",
  },
  {
    imageURL: popularShoe6,
    name: "Jordan 4 Retro Lightning",
    price: "$359.95",
    rate: "4.8",
  },
  {
    imageURL: popularShoe7,
    name: "New Balance 550 White Green",
    price: "$219.95",
    rate: "4.6",
  },
  {
    imageURL: popularShoe8,
    name: "Yeezy Foam RNNR MX Cinder",
    price: "$209.95",
    rate: "4.8",
  },
];

export const services = [
  {
    imageURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imageURL: shieldTick,
    label: "Secure Payment",
    subtext: "Experience worry-free transactions with our secure payment options.",
  },
  {
    imageURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imageURL: customer1,
    customerName: "Morich Brown",
    rating: 4.7,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imageURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.9,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Nike Hot Step Air Terra Drake NOCTA Black", link: "/" },
      { name: "Nike Air Max 1 Patta Waves Monarch", link: "/" },
      { name: "Jordan 1 Retro High Mocha", link: "/" },
      { name: "Yeezy Boost 700 Wave Runner", link: "/" },
      { name: "Yeezy Slide Azure", link: "/" },
      { name: "Jordan 4 Retro Lightning", link: "/" },
      { name: "New Balance 550 White Green", link: "/" },
      { name: "Yeezy Foam RNNR MX Cinder", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@willtostep.com", link: "mailto:customer@willtostep.com" },
      { name: "+96176345317", link: "tel:+96176345317" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
