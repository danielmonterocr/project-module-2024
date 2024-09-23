export default {
	getTbToken: async () => {
		const response = await Tb_Token_Fetch.run();
		console.log(response.token);
		return response.token;
	},

	fetchTbTelemetryPower: async () => {
		const response1 = await Tb_Token_Fetch.run();
		const token = response1.token
		const deviceId = "d013d1c0-6727-11ef-a50e-c9c50c532dda";
		const startDate = new Date(date_1.selectedDate).getTime();
		const endDate = new Date(date_2.selectedDate).getTime();
		const limit = 1440;
		
		const params = {
			token,
			deviceId, 
			startDate, 
			endDate,
			limit
		};
		console.log(params);

		const response2 = await Tb_Telemetry_Power_Fetch.run(params);
		// console.log(response2);
		// console.log(response2.power1.map(power1 => power1.value));
		return response2;
	},

	fetchTbTelemetryWaterFlow: async () => {
		const response1 = await Tb_Token_Fetch.run();
		const token = response1.token
		console.log(token);
		const deviceId = "c48de100-6728-11ef-a50e-c9c50c532dda";
		const startDate = new Date(date_1.selectedDate).getTime();
		const endDate = new Date(date_2.selectedDate).getTime();
		const limit = 1440;
		
		const params = {
			token,
			deviceId, 
			startDate, 
			endDate,
			limit
		};
		console.log(params);

		const response2 = await Tb_Telemetry_Water_Flow_Fetch.run(params);

		// console.log(response2);
		// console.log(response2.totalLiters.map(totalLiters => totalLiters.value));
		return response2;
	},

	fetchTbTelemetryTemperature: async () => {
		const response1 = await Tb_Token_Fetch.run();
		const token = response1.token
		console.log(token);
		const deviceId = "ff66bfc0-6716-11ef-a50e-c9c50c532dda";
		const startDate = new Date(date_1.selectedDate).getTime();
		const endDate = new Date(date_2.selectedDate).getTime();
		const limit = 1440;
		
		const params = {
			token,
			deviceId, 
			startDate, 
			endDate,
			limit
		};
		console.log(params);

		const response2 = await Tb_Telemetry_Temperature_Fetch.run({
			token,
			deviceId, 
			startDate, 
			endDate,
			limit
		});

		// console.log(response2);
		// console.log(response2.temperature1.map(temperature1 => temperature1.value));
		// console.log(response2.temperature2.map(temperature2 => temperature2.value));
		return response2;
	},

	refreshCharts: async () => {
		try {
			await functions.fetchTbTelemetryPower();
			await functions.fetchTbTelemetryWaterFlow();
			await functions.fetchTbTelemetryTemperature();

			return { message: 'Charts refreshed' };
		} catch (err) {
			console.log(err);
		}
	},
};