class Greeter1 {
    private _greetMessage : string;
  
    constructor(Message : string) {
      this._greetMessage = Message;
    }
  
    greet() {
      return `The Greeting message is :-  ${this._greetMessage}`;
    }
  
  };
  
  let result = new Greeter1("Wishing You Joys And Blessings.... :)");
  console.log(result.greet());
    