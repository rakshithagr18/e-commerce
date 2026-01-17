import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

const all_product = [
  { id: 1, name: "Regular Almonds", category: "Dry Fruits", image: p1_img, new_price: 1050, old_price: 1000 },
  { id: 2, name: "Sinora Almonds", category: "Dry Fruits", image: p2_img, new_price: 1300, old_price: 1250 },
  { id: 3, name: "Mamra Almonds", category: "Dry Fruits", image: p3_img, new_price: 3500, old_price: 3000 },
  { id: 4, name: "Shell Almonds", category: "Dry Fruits", image: p4_img, new_price: 460, old_price: 400 },
  { id: 5, name: "shell Walnuts", category: "Dry Fruits", image: p5_img, new_price: 950, old_price: 900 },
  { id: 6, name: "Walnut Giri Gold", category: "Dry Fruits", image: p6_img, new_price: 2000, old_price: 1900 },
  { id: 7, name: "Cashew W180", category: "Dry Fruits", image: p7_img, new_price: 1200, old_price: 1100 },
  { id: 8, name: "Cashew W210", category: "Dry Fruits", image: p8_img, new_price: 1850, old_price: 1800 },
  { id: 9, name: "Cashew W240", category: "Dry Fruits", image: p9_img, new_price: 1300, old_price: 1250 },
  { id: 10, name: "Cashew W320", category: "Dry Fruits", image: p10_img, new_price: 1250, old_price: 1200 },

  { id: 11, name: "California Pistachios", category: "Dry Fruits", image: p11_img, new_price: "1200", old_price: "1150" },
  { id: 12, name: "Plain Pistachios", category: "Dry Fruits", image: p12_img, new_price: "2150", old_price: "2000" },
  { id: 13, name: "Hazelnuts", category: "Dry Fruits", image: p13_img, new_price: "1400", old_price: "1350" },
  { id: 14, name: "Pecan Nuts", category: "Dry Fruits", image: p14_img, new_price: "2650", old_price: "2500" },
  { id: 15, name: "Brazil Nuts", category: "Dry Fruits", image: p15_img, new_price: "2400", old_price: "2300" },
  { id: 16, name: "Black Raisins", category: "Dry Fruits", image: p16_img, new_price: "600", old_price: "500" },
  { id: 17, name: "Sindhukani Raisins", category: "Dry Fruits", image: p17_img, new_price: "1200", old_price: "1050" },
  { id: 18, name: "Anjeer", category: "Dry Fruits", image: p18_img, new_price: "1800", old_price: "1750" },

  { id: 19, name: "Ferroro Rocher", category: "Chocolates", image: p19_img, new_price: "990", old_price: "980" },
  { id: 20, name: "Raffaello", category: "Chocolates", image: p20_img, new_price: "650", old_price: "600" },
  { id: 21, name: "Vochelle", category: "Chocolates", image: p21_img, new_price: "500", old_price: "450" },
  { id: 22, name: "Ritter Sports", category: "Chocolates", image: p22_img, new_price: "400", old_price: "350" },
  { id: 23, name: "Lindoor", category: "Chocolates", image: p23_img, new_price: "1300", old_price: "1200" },
  { id: 24, name: "Toblerone", category: "Chocolates", image: p24_img, new_price: "250", old_price: "200" },
  { id: 25, name: "Barquilla", category: "Chocolates", image: p25_img, new_price: "850", old_price: "800" },
  { id: 26, name: "Godiva", category: "Chocolates", image: p26_img, new_price: "750", old_price: "700" },
  { id: 27, name: "After Eight", category: "Chocolates", image: p27_img, new_price: "750", old_price: "650" },
  { id: 28, name: "Milka", category: "Chocolates", image: p28_img, new_price: "450", old_price: "400" },
  { id: 29, name: "Dairy Milk", category: "Chocolates", image: p29_img, new_price: "600", old_price: "550" },
  { id: 30, name: "Lindt", category: "Chocolates", image: p30_img, new_price: "600", old_price: "550" },

  { id: 31, name: "Party Snack", category: "Confectionary", image: p31_img, new_price: "700", old_price: "650" },
  { id: 32, name: "Salted Peanuts", category: "Confectionary", image: p32_img, new_price: "850", old_price: "800" },
  { id: 33, name: "Pringles", category: "Confectionary", image: p33_img, new_price: "300", old_price: "250" },
  { id: 34, name: "Berries", category: "Dry Fruits", image: p34_img, new_price: "850", old_price: "800" },
  { id: 35, name: "Quadratini", category: "Chocolates", image: p35_img, new_price: "600", old_price: "550" },
  { id: 36, name: "Cookies", category: "Confectionary", image: p36_img, new_price: "400", old_price: "350" }
];

export default all_product;
