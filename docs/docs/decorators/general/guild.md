# @Guild

You can use this guard to specify which guilds your @Slash commands are created by decorating the method with @Slash and @Guild

```ts
@Discord()
abstract class AppDiscord {
  @Slash("hello")
  @Guild("GUILD_ID") // Only created on the guild GUILD_ID
  private hello() {
    // ...
  }

  @Slash("bye")
  @Guild("GUILD_ID", "GUILD_ID2") // Only created on the guild GUILD_ID and GUILD_ID2
  private bye() {
    // ...
  }
}
```

## Guild at class level

You can set the guild IDs for all @Slash inside the class by decorating the class with @Guild

```ts
@Discord()
@Guild("GUILD_ID", "GUILD_ID2")
class DiscordBot {
  @Slash("hello") // Only created on the guild GUILD_ID and GUILD_ID2
  private hello() {
    // ...
  }

  @Slash("hello2") // Only created on the guild GUILD_ID and GUILD_ID2
  private hello2() {
    // ...
  }
}
```

## Params

`@Guild(...guildIDs: Snowflake[])`

### roleIDs

`Snowflake[]`
The list of guild id's

## Make changes to

It either extends or overwrites data configured in below decorators, however, the order of decorators matters.

[@ButtonComponent](/docs/decorators/gui/buttoncomponent)

[@SelectMenuComponent](/docs/decorators/gui/selectmenucomponent)

[@Discord](/docs/decorators/general/discord)

[@SimpleCommand](/docs/decorators/commands/simplecommand)

[@Slash](/docs/decorators/commands/slash)