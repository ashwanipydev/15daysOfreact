import { useState } from 'react'

import './App.css'
import Notes from './Notes'

function App() {


  return (
    <>
     <Notes />
     <p>
     This is a video from the YouTube channel called <strong>'Chai Aur Code'</strong> run by <em><strong>Hitesh Sir</strong></em>, who is a fantastic teacher. The video's title is 'Create React Projects' and it's part of the <strong>'Chai Aur React'</strong> playlist.
     </p>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/k3KqQvywToE?si=ReYkuck4zYje8bby" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <br />
     <p class='note'>
     In this video, you can learn how to create a basic React project using 'npx' and another package bundler called 'Vite.'
     <pre class="code"><code>npx create-react-app projectName<br />// This approach is useful but results in a bulkier bundle.</code></pre>
     The second option is 'Vite.'
     <pre><code>
     npm create vite@latest<br />// This process involves fewer dependencies, <br />resulting in a less bulky bundle.
      </code></pre>
     </p>

    <hr />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yNbnA5pryMg?si=ghA6-STFZtwyVy1S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p class="note">
    In this video, you can learn how to create custom components and understand the flow of React. The title of the video is 'Understand the React Flow and Structur
    <br />
    <br />
    Why do we call it a single-page app? Because in a React app, we can use a single div element to inject many different scripts.
    <br />
    Why do we use the file extension '.jsx' in React? At the end of the day, we're mixing HTML in a JavaScript file, so we use '.jsx' to indicate that when our components return HTML, we're using JSX.
    <br />
    When you create a React component, you should follow some rules:
    <ol>
      <li>Function names should begin with a capital letter.</li>
      <li>File names should also start with a capital letter; it's a best practice in React.</li>
      <li>Importing and exporting components is crucial. Failing to do so can lead to unwanted errors in your program.</li>
      <li>These functions are also referred to as components. Nowadays, creating a component doesn't require as much hard work, but it remains a possibility.</li>
      <li>If you're using 'create-react-app,' it doesn't force a specific file extension, but if you're using Vite bundler, it enforces the use of the '.jsx' file extension for components.</li>

    </ol>
    </p>

    <hr />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kAOuj6o7Kxs?si=9D0PHC2bCuYEBSAh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p class="note">
    "In this video, we attempt to create our own React clone. While it may not be as powerful as the real React, it makes sense for learning purposes. We take some steps toward React:
    Create an HTML file.
    Create a JavaScript file."
    "If you create custom elements, you can use React.createElement() and pass it in ReactDOM.render(). If you want to pass any kind of variable, you can do so, but it's called an evaluated expression because you cannot mix it with JavaScript concepts like ${}. Here, it is valid, but React doesn't allow it because it operates behind the scenes as an object. In this video, you'll learn about the React and Babel concept."
    </p>
    <hr />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lI7IIOWM0Mo?si=-ktrxWGrTBWvFDLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p className='note'>
    In this video, we learn some important concepts of the 'useState()' hook, including how to update multiple things simultaneously with a single click.
    </p>

    </>
  )
}

export default App
