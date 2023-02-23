import logo from './logo.svg';
import './App.css';
import './appStyles.css';
import styles from './appStyles.module.css';

import Greet from './components/Greet';
import Welocme from './components/Welome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import InLine from './components/InLine';

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>

      {/* <InLine /> */}

      {/* <StyleSheet primary={true} /> */}

      {/* <NameList /> */}

      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}

      {/* <EventBind /> */}

      {/* <ClassClick /> */}

      {/* <FunctionClick /> */}

      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Greet name="Charaka" age="18">
        <p>This is a child prop</p>
      </Greet>
      <Greet name="Jith" age="23" />
      <Greet name="CJ" /> */}

      {/* <Welocme name="CJ" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
