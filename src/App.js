function App() {
  return (
    <div className="App">
      <Heart />
      <div class="credit">
        made with love by <a href="https://www.github.com/trulshj" target='_blank' rel='noreferrer'>truls</a>
      </div>
    </div>
  );
}

function Heart() {
  return (
    <div>
      <div class="back"></div>
      <div class="heart"></div>
    </div>
  );
}

export default App;
