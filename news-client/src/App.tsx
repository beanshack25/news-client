import React from "react";
import "./App.css";
import Flashcard from "./components/Flashcard.tsx";

function App() {
  return (
    <div className="flex items-center justify-center h-full">
      <Flashcard
        title="Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.
Nulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.
Quisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.
Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.
Nullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur. "
        link="https://example.com"
      />
    </div>
  );
}

export default App;
