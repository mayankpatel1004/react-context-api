# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `App.js`
```bash
import React, { createContext } from "react";
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Mayank"}>
        <LastName.Provider value={"Patel"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName, LastName}
```

### `index.js`
```bash
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
```

### `ComA.js`
```bash
import React from 'react';
import ComB from './ComB';

export default function ComA() {
    return (
        <div>
            <ComB />
        </div>
    )
}
```

### `ComB.js`
```bash
import React,{useContext} from 'react';
import { FirstName, LastName } from './App';

export default function ComB() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
          <h1>My Name :  {fname} {lname}</h1>
        </>
    )
}
```

### `ComC.js`
```bash
import React from 'react';
import { FirstName } from './App';

export default function ComC() {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <h1>My Name {fname}</h1>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}
```

