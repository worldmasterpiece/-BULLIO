


const scriptsInEvents = {

	async Player_Event1_Act5(runtime, localVars)
	{
		window.CrazyGamesConstructSDK.game.gameplayStart();
	},

	async Player_Event122_Act24(runtime, localVars)
	{
		window.CrazyGamesConstructSDK.game.gameplayStop();
	},

	async Player_Event255_Act17(runtime, localVars)
	{
		window.CrazyGamesConstructSDK.game.gameplayStop();
	},

	async Fase14_Event26_Act3(runtime, localVars)
	{
		window.CrazyGamesConstructSDK.game.happytime();
	},

	async Skd_Event1_Act3(runtime, localVars)
	{
		await window.CrazyGamesConstructSDK.ad.requestAd("midgame");
	},

	async Skd_Event2_Act3(runtime, localVars)
	{
		await window.CrazyGamesConstructSDK.ad.requestAd("rewarded");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

