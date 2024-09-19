export default {
	Switch1onChange (listingId) {
		if (Switch1.isSwitchedOn) {
			console.log("Listing is disabled, enable it")
			Listing_Enable.run({ listingId })
				.then((response) => {
					showAlert("Listing enabled")
					return response
				}) // run after the query is successful
        .catch(() => {showAlert("Error: listing not enabled")}) // run if the query encounters any errors
		} else {
			console.log("Listing is enabled, disable it")
			Listing_Disable.run({ listingId })
				.then((response) => {
					showAlert("Listing disabled")
					return response
				}) // run after the query is successful
        .catch(() => {showAlert("Error: listing not disabled")}) // run if the query encounters any errors
		}
	},
	NavigateToDevices (listingId) {
		console.log(listingId);
	}
}