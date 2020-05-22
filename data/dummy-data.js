
import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Kashmiri', '#f5428d'),
  new Category('c2', 'Punjabi', '#f54242'),
  new Category('c3', 'Bihari', '#f5a442'),
  new Category('c4', 'Rajasthani', '#f5d142'),
  new Category('c5', 'Gujrati', '#368dff'),
  new Category('c6', 'Marathi', '#41d95d'),
  new Category('c7', 'Goan', '#9eecff'),
  new Category('c8', 'Kerala', '#b9ffb0'),
  new Category('c9', 'Andhra', '#ffc7ff'),
  new Category('c10', 'Bengali', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Noon Chai',
    'Beverage',
    '',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUls5YQxIxn7xdSL9klkZ3zFZecOT5UZs5AHmQKimVYOXf4lvD&usqp=CAU',
    'Cold',
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm1',
    ['c1'],
    'Rogan Josh',
    'Main Course',
    '',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Rogan_josh02.jpg/250px-Rogan_josh02.jpg',
      'Hot',
    [
      
    ],
    [
      
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm1',
    ['c1'],
    'Wazwan',
    'Main Course',
    '',
    'https://i1.wp.com/www.greaterkashmir.com/wp-content/uploads/2019/05/wazwan.jpg?fit=1920%2C1440&ssl=1',
    'Hot',
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm1',
    ['c1'],
    'Yahni',
    'Main Course',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Greek_foods.jpg/220px-Greek_foods.jpg',
    'Hot',
    [
      
      'Cheese (optional)'
    ],
    [
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  
  
  new Meal(
    'm2',
    ['c2'],
    'Amritsari Lassi',
    'Beverage',
    '',
    'https://img-global.cpcdn.com/recipes/77cfe2764b3e9c1f/751x532cq70/amritsari-lassi-recipe-main-photo.jpg',
    'Cold',
    [
      
      'Butter'
    ],
    [
      
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm2',
    ['c2'],
    'Chole Bhature',
    'Breakfast',
    '',
    'https://recipes.timesofindia.com/thumb/53314156.cms?width=1200&height=1200',
    'Hot',
    [
      
      'Butter'
    ],
    [
      
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm2',
    ['c2'],
    'Kulcha',
    'BreakFast',
    '',
    'https://i0.wp.com/polkapuffs.in/wp-content/uploads/2017/08/IMG_8099.jpg',
    'Hot',
    [
      
      'Butter'
    ],
    [

      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm2',
    ['c2'],
    'Rabri',
    'Dessert',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Homemade_Rabri.jpg/250px-Homemade_Rabri.jpg',
    'Room, Cold',
    [

      'Butter'
    ],
    [

      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm2',
    ['c2'],
    'Kheer',
    'Dessert',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Kheer.jpg/220px-Kheer.jpg',
    'Hot, Room, Cold',
    [

      'Butter'
    ],
    [
     
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm3',
    ['c3'],
    'Litti Chokha',
    'Breakfast',
    '',
    'https://static.toiimg.com/thumb/53188495.cms?width=1200&height=1200',
    'Hot',
    [
      
      '2 Burger Buns'
    ],
    [
     
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm3',
    ['c3'],
    'Chaat',
    'Breakfast',
    '',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bhalla_Papri_Chaat_with_saunth_chutney.jpg/220px-Bhalla_Papri_Chaat_with_saunth_chutney.jpg',
    'Hot, Room',
    [

      '2 Burger Buns'
    ],
    [
     
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm3',
    ['c3'],
    'Shahi Paneer',
    'Main Course',
    '',
  'https://i.pinimg.com/originals/8f/5d/6b/8f5d6b1a2a90c34139b54ca54e8b7542.jpg',
      'Hot',
    [
      
      '2 Burger Buns'
    ],
    [
      
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm3',
    ['c3'],
    'Kebab',
    'Main Course',
    '',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/275px-Lula_kebab_2.jpg',
    'Hot',
    [
      
      '2 Burger Buns'
    ],
    [

      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm3',
    ['c3'],
    'Motichoor ka Ladoo',
    'Sweet',
    '',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Laddu-Janakpur-Community_Outreach-City_Tour_Day-4-6751.jpg/220px-Laddu-Janakpur-Community_Outreach-City_Tour_Day-4-6751.jpg',
    'Room',
    [
      
      '2 Burger Buns'
    ],
    [
      
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  
  new Meal(
    'm4',
    ['c4'],
    'Dal Baati Churma',
    'breakfast',
    '',
'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DalBati.jpg/182px-DalBati.jpg',   
 'Hot',
    [
      
      'Lemon Slices'
    ],
    [
      
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm4',
    ['c4'],
    'Halva',
    'Sweet',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Naschmarkt_Wien_2009_PD_20091008_031.JPG/220px-Naschmarkt_Wien_2009_PD_20091008_031.JPG',
    'Room',
    [
      
      'Lemon Slices'
    ],
    [
      
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm4',
    ['c4'],
    'Gujia',
    'Snack',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Gujhia.JPG/250px-Gujhia.JPG',    
    'Room',
    [

      'Lemon Slices'
    ],
    [
     
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm5',
    ['c5'],
    'Dhokla',
    'Breakfast',
    '',
'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Marro_Dhokla.jpg/200px-Marro_Dhokla.jpg',    
'Hot, Cold',
    [
      'Salt and Pepper'
    ],
    [
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm5',
    ['c5'],
    'Kaju Katli',
    'Sweet',
    '',
'https://i.ndtvimg.com/i/2017-08/kaju-barfi_650x400_71501923806.jpg',    
'Room',
    [
     
      'Salt and Pepper'
    ],
    [

      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm5',
    ['c5'],
    'Handvo',
    'Breakfast',
    '',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sour_cake_%27Handwo%27.jpg/200px-Sour_cake_%27Handwo%27.jpg',    
'Hot',
    [

      'Salt and Pepper'
    ],
    [
      
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm5',
    ['c5'],
    'Jalebi',
    'Sweet',
    '',
'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Awadhi_jalebi.jpg/220px-Awadhi_jalebi.jpg',   
'Hot',
    [
      
      'Salt and Pepper'
    ],
    [

      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6'],
    'Vada Pav',
    'Breakfast',
    '',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vada_Pav-Indian_street_food.JPG/250px-Vada_Pav-Indian_street_food.JPG',
    'Hot',
    [
      
    ],
    [
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm6',
    ['c6'],
    'Pohay',
    'Breakfast',
    '',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Poha%2C_a_snack_made_of_flattened_rice.jpg/250px-Poha%2C_a_snack_made_of_flattened_rice.jpg',
    'Hot',
    [
      
    ],
    [
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm6',
    ['c6'],
    'Misal Pav',
    'Breakfast',
    '',
'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Kolhapuri_Misal_Pav.jpg/300px-Kolhapuri_Misal_Pav.jpg',    
'Hot',
    [
      
    ],
    [
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm6',
    ['c6'],
    'Puran Poli',
    'Breakfast',
    '',
    'https://www.whiskaffair.com/wp-content/uploads/2018/02/Puran-Poli-4.jpg',
    'Hot',
    [
      
    ],
    [
    ],
    true,
    false,
    true,
    false
  ),
  
  new Meal(
    'm7',
    ['c7'],
    'Fried Fish',
    'Main Course',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Fried_Fish_and_French_Fries.jpg/250px-Fried_Fish_and_French_Fries.jpg',
    'Hot',
    [

    ],
    [
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm7',
    ['c7'],
    'Croquette',
    'Breakfast',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Croquettes_with_salad.jpg/250px-Croquettes_with_salad.jpg',
    'Hot',
    [

    ],
    [
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm7',
    ['c7'],
    'Croquette',
    'Breakfast',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Vindalho.jpg/250px-Vindalho.jpg',
    'Hot',
    [

    ],
    [
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm7',
    ['c7'],
    'Ros Omellete',
    'Main Course',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ros_omelette.jpg/220px-Ros_omelette.jpg',
    'Hot',
    [

    ],
    [
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Sadya',
    'Main Course',
    '',
'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sadhya_DSW.jpg/250px-Sadhya_DSW.jpg',
    'Hot',
    [
    ],
    [
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm8',
    ['c8'],
    'Appam',
    'Breakfast',
    '',
    'https://i2.wp.com/traditionallymodernfood.com/wp-content/uploads/2019/11/IMG_9910.jpg',
    'Hot',
    [
    ],
    [
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm8',
    ['c8'],
    'Puttu',
    'Breakfast',
    '',
    'https://files2.hungryforever.com/wp-content/uploads/2016/05/05121215/puttu-kadala-kerala-vegetarian-recipes.jpg',    
    'Hot',
    [
    ],
    [
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm8',
    ['c8'],
    'Dosa',
    'Breakfast',
    '',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/03/dosa-recipe.jpg',
    'Hot',
    [
    ],
    [
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm9',
    ['c9'],
    'Dibba Rotti',
    'Breakfast',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Dibba_Roti.JPG/220px-Dibba_Roti.JPG',
    'Hot',
    [
      
    ],
    [

    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm9',
    ['c9'],
    'Hyderabadi Biryani',
    'Main Course',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/250px-Hyderabadi_Chicken_Biryani.jpg',
    'Hot',
    [
      
    ],
    [

    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm9',
    ['c9'],
    'Upma',
    'Breakfast',
    '',
'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_photo_of_Upma.jpg/250px-A_photo_of_Upma.jpg',    
  'Hot',
    [
      
    ],
    [

    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm9',
    ['c9'],
    'Bondi',
    'Sweet',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Boondi_Mithai.jpg/220px-Boondi_Mithai.jpg',
    'Hot, Room',
    [
      
    ],
    [

    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    [ 'c10'],
    'Rasgulla',
    'Dessert',
    '',
    'https://i.ndtvimg.com/i/2017-10/rasgulla-recipe_620x330_51508133855.jpg',
    'Room, Hot, Cold',
    [
      
    ],
    [
      
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm10',
    [ 'c10'],
    'Ras Malai',
    'Dessert',
    '',
    'https://secureservercdn.net/198.71.233.68/927.9d6.myftpupload.com/wp-content/uploads/2018/01/rasmalai9.jpg',
    'Room, Cold',
    [
      
    ],
    [
      
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm10',
    [ 'c10'],
    'Mishti Doi',
    'Dessert',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Mishti_Doi.jpg/220px-Mishti_Doi.jpg',
    'cold',
    [
      
    ],
    [
      
    ],
    true,
    true,
    true,
    true
  )
];
