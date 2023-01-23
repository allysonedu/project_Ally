import React from 'react';

import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: ['Cadastrar 📝  ', ' Assistido 🧑', 'Aqui! 👇'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
