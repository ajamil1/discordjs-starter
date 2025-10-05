import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    switch (interaction.commandName) {
        case "ping":
            await interaction.reply("1200ms");
            break;
        case "howdy":
            await interaction.reply("Hello!");
            break;
    }
});

client.login(process.env.TOKEN);
