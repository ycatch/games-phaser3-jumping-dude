(function() {

    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

    // Add the game States; could be done in Boot but just as easy here
    game.state.add('Boot', BasicGame.Boot);
    game.state.add('Preloader', BasicGame.Preloader);
    game.state.add('MainMenu', BasicGame.MainMenu);
    game.state.add('Game', BasicGame.Game);

    // Now start the Boot state.
    game.state.start('Boot');

})();
