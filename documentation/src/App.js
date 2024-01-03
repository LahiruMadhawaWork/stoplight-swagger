import { API } from '@stoplight/elements';

import '@stoplight/elements/styles.min.css';

function App() {
  return (
    <div className="App">
      <API apiDescriptionDocument="../oas/actions.yaml" />
    </div>
  );
}

export default App;
