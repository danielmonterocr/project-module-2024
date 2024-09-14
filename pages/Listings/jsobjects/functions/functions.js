export default {
	Switch1onChange (listingId) {
		if (Switch1.isDisabled) {
			showAlert("Switch is disabled")
			console.log("Listing is disabled, enable it")
			Listing_Enable.run({ listingId })
				.then((response) => {
					showAlert("Listing enabled")
					return response
				}) // run after the query is successful
        .catch(() => {showAlert("Error: listing not enabled")}) // run if the query encounters any errors
		} else {
			showAlert("Switch is enabled")
			console.log("Listing is enabled, disable it")
			Listing_Disable.run({ listingId })
				.then((response) => {
					showAlert("Listing disabled")
					return response
				}) // run after the query is successful
        .catch(() => {showAlert("Error: listing not disabled")}) // run if the query encounters any errors
		}
	}
}

saveUserId: async() => {
		const userId = User_Register.data._id;
		console.log("userId");
		console.log(userId);
		.then((response) => {...}) // run after the query is successful
        .catch(() => {...}) // run if the query encounters any errors
	},