namespace Greetings {
  export function returnGreeting(greeting: string) {
    console.log(`The message from namespace Greetings is ${greeting}`);
  }
}
namespace GreetingsWithLength {
  export function returnGreeting(greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
  }
  function getLength(message: string): number {
    return message.length
  }
}

namespace AllGreetings {
  export namespace Greetings {
    export function returnGreeting(greeting: string) {
      console.log(`The message from namespace Greetings is ${greeting}.`);
    }
  }
  export namespace GreetingsWithLength {
    export function returnGreeting(greeting: string) {
      let greetingLength = getLength(greeting);
      console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
      return message.length
    }
  }
}

import greet = AllGreetings.Greetings
greet.returnGreeting('Bonjour')


interface Options {
  hostName: string;
  port: number;
}

function validateOptions (options: Options) {
  Object.keys(options).forEach(key => {
    if (options[key] == null) {
        // @error {w=12} Expression of type 'string' can't be used to index type 'Options'.
      throw new Error(`Missing option ${key}`);
    }
  });
}
