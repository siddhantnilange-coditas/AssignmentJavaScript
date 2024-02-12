//1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]; 


[e, pi, gravity, humanBodyTemp, waterBoilingTemp]=constants;

console.log(e);
console.log(pi);
console.log(gravity);
console.log(humanBodyTemp);
console.log(waterBoilingTemp);
/*
2.72
3.14
9.81
37
100
*/


// 2.Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
[fin, est, sw, den, nor]=countries;

console.log(fin);
console.log(est);
console.log(sw);
console.log(den);
console.log(nor);
/*
Finland
Estonia
Sweden
Denmark
*/

// 3.Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }

  let {width: newWidth, height:newHeight, area:newArea, perimeter:newPerimeter}=rectangle;
  console.log(newWidth);
  console.log(newHeight);
  console.log(newArea);
  console.log(newPerimeter);
/*
20
10
200
60
*/

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]
// 4.  Iterate through the users array and get all the keys of the object using destructuring

    for (let user of users) {
        console.log(Object.keys(user));
    }


//     [ 'name', 'scores', 'skills', 'age' ]
// [ 'name', 'scores', 'skills', 'age' ]
// [ 'name', 'scores', 'skills', 'age' ]
// [ 'name', 'scores', 'skills', 'age' ]
// [ 'name', 'scores', 'skills', 'age' ]
// [ 'name', 'scores', 'skills', 'age' ]
// [ 'name', 'scores', 'skills', 'age' ]

//5. Find the persons who have less than two skills
for (const user of users) {
    if(user.skills.length<2){
      console.log(user);
    }

}
//{ name: 'John', scores: 85, skills: [ 'HTML' ], age: 25 }


const worldCountries = [
    {
      name: 'USA',
      capital: 'Washington, D.C.',
      population: 331449281,
      languages: ['English', 'Spanish']
    },
    {
      name: 'INDIA',
      capital: 'DELHI',
      population: 33144921,
      languages: ['English', 'Hindi', 'Marathi', 'Tamil', 'Telgu']
    },
    {
      name: 'DUBAI',
      capital: 'XYZ',
      population: 331449,
      languages: ['English', 'Spanish']
    },
    {
      name: 'CHINA',
      capital: 'Beijing',
      population: 3314492818,
      languages: ['Chinese']
    },
    {
      name: 'JAPAN',
      capital: 'Tokyo',
      population: 33149281,
      languages: ['Japanese']
    }
  ];

  
    //6.Destructure the countries array print name, capital, population and languages of all countries

    worldCountries.forEach(({ name, capital, population, languages }) => {
        console.log(`Country: ${name}`);
        console.log(`Capital: ${capital}`);
        console.log(`Population: ${population}`);
        console.log(`Languages: ${languages}`);
        console.log("************");
      });

    // 7.  Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
    //   const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    //   console.log(name, skills, jsScore, reactScore)

    const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    const [name, [...skills], [...scores]]=student;
      console.log(name, skills, scores);


// 8. Write a function called convertArrayToObject which can convert the array to a structure object.
//     const students = [
//         ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
//         ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
//       ]

//     console.log(convertArrayToObject(students))
//     [
//       {
//         name: 'David',
//         skills: ['HTML','CSS','JS','Node'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTML','CSS','JS','Node'],
//         scores: [85, 80,85,80]
//       }
//     ]
const students = [
            ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
            ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
    ]
    function arrayToObject(students){
      const newStudents=[];

      for(const student of students){
        const[name, skills, score]=student;
        const studentsInfo={};
        studentsInfo.name=name;
        studentsInfo.skill=skills;
        studentsInfo.score=score;
        newStudents.push(studentsInfo);


      }
      return newStudents;
    }
console.log(arrayToObject(students));


//9. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
//     const student = {
//       name: 'David',
//       age: 25,
//       skills: {
//         frontEnd: [
//           { skill: 'HTML', level: 10 },
//           { skill: 'CSS', level: 8 },
//           { skill: 'JS', level: 8 },
//           { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//           { skill: 'Node',level: 7 },
//           { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//           { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//       }
//     }

  const std = {
        name: 'David',
        age: 25,
        skills: {
          frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
          ], 
          backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
          ],
          dataBase:[
            { skill: 'MongoDB', level: 7.5 },
          ],
          dataScience:['Python', 'R', 'D3.js']
        }
      }
const newStduddent={...std};
newStduddent.skills.frontEnd.push({skill: 'Bootstrap', level:8});
newStduddent.skills.backEnd.push({skill: 'Express', level:9});
newStduddent.skills.dataBase.push({skill: 'SQL', level:8});
newStduddent.skills.dataBase.push({skill: 'SQL'});

console.log(newStduddent);