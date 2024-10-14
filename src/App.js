/** 
// Способи оголошення даних
let name = "Maksym";
name = "Oksana";

const firstName = "Maks";

// Типи даних
const age = 27.234;
const isLoading = false;
const isLogedIn = true;
// null - коли ми не знаємо що вказати, але нам потрібне якесь значення
const lastName = null;

let authorName = "Taras";
const bookName = "book 'War and peace'";
const part = 1;
const favoriteBook = `Star wars ${part}`;
const salut = `Hello, ${name}, my age is ${age}`;

function App() {
  console.log(name);
  console.log(firstName);

  console.log(age);

  console.log(isLoading);
  console.log(isLogedIn);

  console.log(lastName);

  console.log(authorName);
  console.log(bookName);
  console.log(salut);

  return (
    <div className="App">
      <h1>Привіт, JS</h1>
      <p>{salut}</p>
      Age: {age}
      <br />
      Book: {favoriteBook}
    </div>
  );
}
*/

/** Об'єкти
const user = {
  name: "Maksym",
  age: 27,
  youtubeChanel: "Maksym Rudnyi",
  isYouTuber: true,
};

user.lastName = "Rudnui";
delete user.age;

// обєкти копіюються по посиланню
const user2 = user;
user2.name = "Oksana";

console.log(user);
console.log(user2);

// computed property names
function App() {
  const variable = "chanel";

  const user = {
    name: "Maksym",
    age: 27,
    youtubeChanel: "Maksym Rudnyi",
    isYouTuber: true,
    [variable]: "Travels code",
  };

  console.log(user);

  return (
    <div className="App">
      <h1>{user.name}</h1>
      world
    </div>
  );
}

export default App;
*/

/** Arrays
function App() {
  const fruits = ["banana", "orange", "apple"];
  fruits.push("mango");

  // map - метод, для того щоб пройти покожному елементу масива і отримати його значення в окрему змінну. Цей метод повертає ноаий масив!

  const fruits2 = fruits.map(function (item, index) {
    return `Fruit ${index}: ${item}`;
  });

  console.log(fruits);
  console.log(fruits2);
  return (
    <div className="App">
      <h1>Hello</h1>
      {fruits.map(function (fruit, index) {
        return (
          <div key={fruit}>
            Fruit {index}: {fruit}
          </div>
        );
      })}
    </div>
  );
}
*/

/** Destructuring assignment
function App() {
  const name = "Demo video";
  const fruits = ["banana", "orange", "apple"];

  // зберегли значення елементів мавсива в змінні
  const [banana, orange] = fruits;
  fruits.push("mango");

  const user = {
    name: "Maksym",
    lastName: "Rudnui",
    age: 27,
    youtubeChanel: "Maksym Rudnyi",
    isYouTuber: true,
    fruits,
    bestFriend: {
      name: "Oksana",
      youtubeChanel: "PhytonProgrammerGirl",
    },
  };

  console.log(user);

  // опертаор Destructuring assignment -візьми об'єкт user і з нього візьміть наступні поля і створіть змінні з цими полями
  const {
    name: firstName,
    lastName,
    age,
    city = "Kyiv",
    bestFriend: { name: friendName },
  } = user;

  return (
    <div className="App">
      <h1>
        {firstName} - {lastName}, {age}, {city}
      </h1>
      <h2>{friendName}</h2>

      <div>first fruit: {banana}</div>
      <div>second fruit: {orange}</div>
    </div>
  );
}
*/

/** Rest parameters and spread syntax
function User({ name, youtubeChanel, ...rest }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{youtubeChanel}</h2>
      <p>{JSON.stringify(rest)}</p>
    </div>
  );
}

function App() {
  const fruits = ["banana", "orange", "apple"];
  fruits.push("mango");

  // зберегли значення елементів мавсива в змінні
  const [banana, orange, ...restFruits] = fruits;

  const user = {
    name: "Maksym",
    lastName: "Rudnui",
    age: 27,
    youtubeChanel: "Maksym Rudnyi",
    isYouTuber: true,
    fruits,
    bestFriend: {
      name: "Oksana",
      youtubeChanel: "PhytonProgrammerGirl",
    },
  };

  // console.log(user);

  // const user2 = {
  //   ...user,
  //   bestFriend: {
  //     ...user.bestFriend,
  //   },
  // };

  // user2.name = "Oksana";
  // user2.bestFriend.name = "Natasha";

  // console.log(user2);

  // опертаор Destructuring assignment -візьми об'єкт user і з нього візьміть наступні поля і створіть змінні з цими полями
  const { name, ...rest } = user;

  return (
    <div className="App">
      <User name={name} channelName={user.youtubeChanel} />
    </div>
  );
}
*/

/** Conditions
function User({ name, youtubeChanel, gender, ...rest }) {
  return (name && <h1>{name}</h1>) || <p>No Data</p>;
}

function App() {
  const fruits = ["banana", "orange", "apple"];
  fruits.push("mango");

  // зберегли значення елементів мавсива в змінні
  const [banana, orange, ...restFruits] = fruits;

  const user = {
    name: "Maksym",
    lastName: "Rudnui",
    gender: "male",
    age: 27,
    youtubeChanel: "Maksym Rudnyi",
    isYouTuber: true,
    fruits,
    bestFriend: {
      name: "Oksana",
      youtubeChanel: "PhytonProgrammerGirl",
    },
  };

  const { name, ...rest } = user;

  return (
    <div className="App">
      <User {...user} />
      <User />
    </div>
  );
}
*/

/** цикл for
function User({ name, youtubeChanel, gender, ...rest }) {
  return (name && <h1>{name}</h1>) || <p>No Data</p>;
}

function App() {
  const fruits = ["banana", "orange", "apple"];
  fruits.push("mango");

  // зберегли значення елементів мавсива в змінні
  const [banana, orange, ...restFruits] = fruits;

  const user = {
    name: "Maksym",
    lastName: "Rudnui",
    gender: "male",
    age: 27,
    youtubeChanel: "Maksym Rudnyi",
    isYouTuber: true,
    fruits,
    bestFriend: {
      name: "Oksana",
      youtubeChanel: "PhytonProgrammerGirl",
    },
  };

  let html = [];
  for (let i = 0; i < fruits.length; i++) {
    html.push(
      <p>
        {" "}
        {i} - {fruits[i]}{" "}
      </p>
    );
  }

  const { name, ...rest } = user;

  return <div className="App">{html}</div>;
}
*/

/** Об'єкти

*/

/** Об'єкти

*/

function sum(a, b) {
  console.log("fun sum");

  return a + b;
}

const multiply = function (a, b) {
  console.log("fun mult");
  return a * b;
};

const sum2 = (...rest) => {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }

  return sum;
};

console.log("Sum2: ", sum2(2, 3, 4, 5, 6));

const myFruits = (fruits = []) => {
  let html = [];

  try {
    for (let i = 0; i < fruits.length; i++) {
      html.push(
        <p>
          {i} - {fruits[i]}
        </p>
      );
    }
  } catch (e) {
    console.log("New error: ", e);
    html.push(<h1>No fruits</h1>);
  }

  return html;
};

const User = ({ name = "Guest" }) => <h1>{name}</h1> || <p>No Data</p>;

function App() {
  const fruits = ["banana", "orange", "apple"];
  fruits.push("mango");

  // зберегли значення елементів мавсива в змінні
  const [banana, orange, ...restFruits] = fruits;

  const user = {
    name: "Maksym",
    lastName: "Rudnui",
    gender: "male",
    age: 27,
    fruits,
    youtubeChanel: "Maksym Rudnyi",
  };

  const user2 = {
    name: "Oksana",
  };

  const { name, ...rest } = user;

  const iLikeTheseFruits = myFruits();

  return (
    <div className="App">
      <User name={user.name} />
    </div>
  );
}

export default App;
