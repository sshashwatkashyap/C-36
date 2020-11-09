class Form{

    constructor(){}

    display(){

        var title = createElement('h2');
        title.html("Car Racing")
        title.position(300, 200);

        var input = createInput("playerName");
        input.position(300, 300);

        var button = createButton("Play");
        button.position(300, 400);

        var greeting = createElement('h3');

        button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1

            player.update(name)

            player.updateCount(playerCount);

            greeting.html("Hello"+name);
            greeting.position(200, 200);

        });

    }

}