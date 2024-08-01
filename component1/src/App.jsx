import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcepts/CoreConcept";
import TabButton from "./Components/TabButton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton label="Component" />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
