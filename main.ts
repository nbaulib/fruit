namespace SpriteKind {
    export const fruit2 = SpriteKind.create()
    export const fruit1 = SpriteKind.create()
    export const fruit5 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruit2, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 2)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 2)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, 2)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, 2)
    }
    otherSprite.destroy(effects.spray, 100)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruit5, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 5)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 5)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, 5)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, 5)
    }
    otherSprite.destroy(effects.bubbles, 100)
    music.powerUp.play()
})
info.onCountdownEnd(function () {
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Three))
    } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Four))
    } else {
        game.setGameOverMessage(true, "It's a Tie!!!")
    }
})
function spawnEnemy () {
    IceCream = sprites.create(assets.image`Cake`, SpriteKind.Enemy)
    IceCream.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    IceCream.setVelocity(25, 25)
    IceCream.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruit1, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, 1)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, 1)
    }
    otherSprite.destroy(effects.spray, 100)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let strawberry: Sprite = null
let cherry: Sprite = null
let IceCream: Sprite = null
scene.setBackgroundColor(13)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Hero1`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Hero2`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`Hero3`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`Hero4`, SpriteKind.Player))
for (let value of mp.allPlayers()) {
    mp.getPlayerSprite(value).setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    mp.getPlayerSprite(value).setStayInScreen(true)
    mp.moveWithButtons(value)
    mp.setPlayerState(value, MultiplayerState.score, 0)
}
spawnEnemy()
info.startCountdown(30)
game.onUpdateInterval(5000, function () {
	
})
game.onUpdateInterval(1000, function () {
    cherry = sprites.createProjectileFromSide(assets.image`Cherry`, 50, 0)
    cherry.setPosition(0, randint(0, scene.screenHeight()))
    cherry.setKind(SpriteKind.fruit2)
})
game.onUpdateInterval(500, function () {
    strawberry = sprites.createProjectileFromSide(assets.image`Strawberry`, 50, 0)
    strawberry.setPosition(0, randint(0, scene.screenHeight()))
    strawberry.setKind(SpriteKind.fruit1)
})
