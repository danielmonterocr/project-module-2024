export default {
	fetchData() {
		return {
			email: [120, 132, 101, 134, 90, 230, 210],
			unionAds: [220, 182, 191, 234, 290, 330, 310],
			videoAds: [150, 232, 201, 154, 190, 330, 410],
			direct: [320, 332, 301, 334, 390, 330, 320],
			searchEngine: [820, 932, 901, 934, 1290, 1330, 1320],
			// Add more data as needed
		};
	},
	options: {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985',
				},
			},
		},
		legend: {
			data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
		],
		yAxis: [
			{
				type: 'value',
			},
		],
		series: [
			{
				name: 'Email',
				type: 'line',
				stack: 'Total',
				areaStyle: {},
				emphasis: {
					focus: 'series',
				},
				data: this.fetchData().email,
			},
			{
				name: 'Union Ads',
				type: 'line',
				stack: 'Total',
				areaStyle: {},
				emphasis: {
					focus: 'series',
				},
				data: this.fetchData().unionAds,
			},
			{
				name: 'Video Ads',
				type: 'line',
				stack: 'Total',
				areaStyle: {},
				emphasis: {
					focus: 'series',
				},
				data: this.fetchData().videoAds,
			},
			{
				name: 'Direct',
				type: 'line',
				stack: 'Total',
				areaStyle: {},
				emphasis: {
					focus: 'series',
				},
				data: this.fetchData().direct,
			},
			{
				name: 'Search Engine',
				type: 'line',
				stack: 'Total',
				label: {
					show: true,
					position: 'top',
				},
				areaStyle: {},
				emphasis: {
					focus: 'series',
				},
				data: this.fetchData().searchEngine,
			},
		],
	},
};