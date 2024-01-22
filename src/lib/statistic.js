export const options = {
	colors: ['#1A56DB', '#FDBA8C'],
	series: [
		{
			name: 'Books',
			color: '#1A56DB',
			data: [
				{ x: 'Fantasy', y: 18 },
				{ x: 'Action', y: 9 },
				{ x: 'Drama', y: 5 },
				{ x: 'Historical', y: 22 },
				{ x: 'Science', y: 15 },
				{ x: 'Other', y: 7 }
			]
		}
	],
	chart: {
		type: 'bar',
		height: '289px',
		fontFamily: 'Inter, sans-serif',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '70%',
			borderRadiusApplication: 'end',
			borderRadius: 8
		}
	},
	tooltip: {
		shared: true,
		intersect: false,
		style: {
			fontFamily: 'Inter, sans-serif'
		}
	},
	states: {
		hover: {
			filter: {
				type: 'darken',
				value: 1
			}
		}
	},
	stroke: {
		show: true,
		width: 0,
		colors: ['transparent']
	},
	grid: {
		show: false,
		strokeDashArray: 4,
		padding: {
			left: 2,
			right: 2,
			top: -14
		}
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		show: false
	},
	xaxis: {
		floating: false,
		labels: {
			show: true,
			style: {
				fontFamily: 'Inter, sans-serif',
				cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
			}
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		}
	},
	yaxis: {
		show: false
	},
	fill: {
		opacity: 1
	}
};
