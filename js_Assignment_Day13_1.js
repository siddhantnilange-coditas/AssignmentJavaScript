

//1. Create an empty object called cow
const cowObj={};

//2. Print the the cow object on the console
console.log(cowObj);

//3. Add name, legs, color, age and sound properties for the cow object.
cowObj.name= "mummy cow",
cowObj.legs="4 legs",
cowObj.color="Brown",
cowObj.age=15,

//4. The sound property is a method which return "maaah maaah"
    cowObj.sound=function(){
        return "Maah Maah";
    };

    // console.log(cowObj);
//5. Get name, legs, color, age and sound value from the cow object
console.log(`name ${cowObj.name}, legs ${cowObj.legs}, color ${cowObj.color}, age ${cowObj.age}, sound ${cowObj.sound()}`)
 
//6. Set new properties the cow object: breed, getCowInfo()
// cowObj.breed="Geer",
// cowObj.getCowInfo=function(){



//7. Get all keys or properties of users object
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 8.Find the person who has many skills in the users object.
let maxLen=0;
let personWithMaxSkills;
for(const user in users){
    if(users[user].skills.length>maxLen){
        maxLen=users[user].skills.length;
        personWithMaxSkills=user;
        
    }
}
console.log(`Person with max skills ${personWithMaxSkills} total number of skills are ${maxLen}`);

//9. Count logged in users, count users having greater than 
// equal to 30 points from the following object.

let maxCount=0;
let countOfLoggedInUsers=0;
for(const user in users){
    
    if(users[user].isLoggedIn===true){
        countOfLoggedInUsers++;
        if(users[user].points>=30){
            maxCount++;
        }
    }

}
console.log(`Maximum user count is ${countOfLoggedInUsers} and maximum users with more than 30 points are ${maxCount}`);

//10 Find people who are MERN stack developer from the users object
for(const user in users){
    
    let userSkills=users[user].skills;     
    if(userSkills.includes('MongoDB') && userSkills.includes('Express') && userSkills.includes('React') && userSkills.includes('Node')){
      console.log(`Person who  is MERN stack developer, ${user}`);
    }

}


//11. Set your name in the users object without modifying the original users object
const myInfoObj= {
  Siddhant: {
    email: 'sidd@sidd.com',
    skills: ['C', 'C++', 'JavaScript', 'Flutter'],
    age: 22,
    isLoggedIn: true,
    points: 100 
  }
};
const updatedUersObj = Object.assign({}, users, myInfoObj);
console.log(updatedUersObj);





//12. Get all keys or properties of users object
console.log(Object.keys(users));

//13. Get all the values of users object

console.log(Object.values(users));

//14. Use the countries object to print a country name, capital, populations and languages.
countries = {
  "USA": {
      "capital": "Washington, D.C.",
      "population": 331449281,
      "languages": ["English", "Spanish"]
  },
  "INDIA": {
    "capital": "DELHI",
    "population": 33144921,
    "languages": ["English", "Hindi", "Marathi", "Tamil", "Telgu"],
  },
  "DUBAI": {
    "capital": "XYZ",
    "population": 331449,
    "languages": ["English", "Spanish"]
  },
  "CHINA": {
    "capital": "Bijin",
    "population": 3314492818,
    "languages": ["CHINES"]
  },
  "JAPAN": {
    "capital": "Tokio",
    "population": 33149281,
    "languages": ["Japnis"]
  },
}


for(const country in countries){
  const { capital, population, languages } = countries[country];


  console.log(country);
  console.log(capital);
  console.log(population);
  console.log(languages);
}

//15. Create an object called personAccount. It has firstName, lastName, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and
//  accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

personAccount={
  firstName: '',
  lastName: '',
  incomes: new Map(),
  expenses: new Map(),


  get totalIncome() {
    let totalAmount=0;
    for(const amount of this.incomes.values()){
      totalAmount=totalAmount+amount;
    }
    return totalAmount;
  },

  get totalExpenses() {
    let totalExpenses=0;

    for(let amount of this.expenses.values()){
      totalExpenses=totalExpenses+amount;
    }
    return totalExpenses;
  },

  

  get accountInfo(){
    return `Total Income is ${this.totalIncome} and total expenses are ${this.totalExpenses}`;
  },

  addIncome(details, amount){
    this.incomes.set(details, amount);
  },
  addExpenses(details, amount){
    this.expenses.set(details, amount);
  },

  totalBalance(){
    return this.totalIncome-this.totalExpenses;
  }
  
}

personAccount.addIncome("sadfds",100);
personAccount.addIncome("fdsd",200);
personAccount.addIncome("fdfd",300);

personAccount.addExpenses("fdfd",100);
personAccount.addExpenses("dfdsfd",200);


console.log(personAccount.accountInfo);
console.log("Total Balance is ", personAccount.totalBalance());

//16. Imagine you are getting the below users array of objects.
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// Create a function called signIn which allows user to sign in to the application

const userInfo = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];

function signUp(userName, userEmail){

  for (let user of userInfo) {
    if(userName === user.username || userEmail === user.email){
      return 'User already exists';
    }

  }
  let newUserObj = { id: "dfd32323", name: userName,  email: userEmail, password: "my password 12345", createdAt: '11/02/2024'};
  userInfo.push(newUserObj);
}


function signIn(userId, userPassword){
  

  for (let user of userInfo) {
    if(user._id===userId && user.isLoggedIn===true){
      return 'User already Logged In';
    }
 
  }

  for (let user of userInfo) {
    if(user._id === userId && user.password===userPassword){
      return "SignIn successful";  
    }
 
  }
 
    return "Invalid user id and password";

}

console.log(signUp('ghderc', 'thomas@thomas.com'));
console.log(signUp('xyz', 'xyz@xyz.com'));
console.log(userInfo);

console.log(signIn('eefamr', '123222'));
console.log(signIn('knk', '12889'));

//17. The products array has three elements and each of them has six properties.
// Create a function called rateProduct which rates the product
// Create a function called averageRating which calculate the average rating of a product

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function rateProduct(productId, userId, rating) {
  for (const product of products) {
    if (product._id === productId) {
      product.ratings.push({ userId, rate: rating });
      return "Product rated successfully.";
    }
  }
  return "Product not found.";
}


function averageRating(productId) {
  for (const product of products) {
    if (product._id === productId) {
      if (product.ratings.length === 0) {
        return "No ratings yet for this product.";
      } else {
        const totalRating = product.ratings.reduce((acc, curr) => acc + curr.rate, 0);
        return totalRating / product.ratings.length;
      }
    }
  }
  return "Product not found.";
}

console.log(rateProduct('eedfcf', 'abc123', 3)); //Product rated successfully.

console.log(averageRating('aegfal')); //No ratings yet for this product.

//18. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.


function likeProduct(productId, userId) {
  for (const product of products) {
    if (product._id === productId) {
      if (product.likes.length === 0) {
        product.likes.push(userId);
        return "Liked successflly";
      } else {
        product.likes.splice(0, 1);
        return "Like removed";
      }
    }
  }
  return "Product not found.";
}

console.log(likeProduct('aegfal', 'sds233')); //Like removed
console.log(products);


