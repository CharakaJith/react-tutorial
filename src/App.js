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
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRInput from './components/FRInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Hero name="Charaka" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero name="Jith" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero name="CJ" />
      </ErrorBoundry>

      {/* <PortalDemo /> */}

      {/* <FRParentInput /> */}

      {/* <FocusInput /> */}

      {/* <Input /> */}

      {/* <RefsDemo /> */}

      {/* <ParentComp /> */}

      {/* <PureComp /> */}

      {/* <Table /> */}

      {/* <FragmentDemo /> */}

      {/* <LifecycleA /> */}

      {/* <Form /> */}

      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}

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
