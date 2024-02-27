import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  const currentPath = window.location.href;
  return (
    <main>
      <div class="">
        <img src={logo} class={styles.logo} alt="logo" />
      </div>
      <div class="container">
        <div class="inner-container">
          <h2 class="header">
            You’ve just ignited a new <span class="library">SoildJs</span> static site!
          </h2>
          <span class="pathname">
            {currentPath}
          </span>
        </div>
        <p class="footer">
          Made in Nigeria with 💖
        </p>
      </div>
    </main>
  );
}

export default App;
