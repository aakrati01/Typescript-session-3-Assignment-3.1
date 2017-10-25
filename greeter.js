var Greeter1 = /** @class */ (function () {
    function Greeter1(Message) {
        this._greetMessage = Message;
    }
    Greeter1.prototype.greet = function () {
        return "The Greeting message is :-  " + this._greetMessage;
    };
    return Greeter1;
}());
;
var result = new Greeter1("Wishing You Joys And Blessings.... :)");
console.log(result.greet());
