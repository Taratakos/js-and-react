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

function App() {
  console.log(name);
  console.log(firstName);

  console.log(age);

  console.log(isLoading);
  console.log(isLogedIn);

  return (
    <div className="App">
      <h1>Привіт, JS</h1>
      Age: {age}
    </div>
  );
}

export default App;
