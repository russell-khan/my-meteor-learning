Template.home.helpers({
	//	other	helpers…
	postsList: function(){
		return [
			{
				title: 'My Second entry',
				description: 'Borem	sodum color	sit	amet, consetetur sadipscing elitr.',
				author:	'Fabian	Vogelsteller',
				timeCreated: moment().subtract(3, 'days')
			},
				{
					title: 'My First entry',
					description: 'Lorem	ipsum dolor	sit	amet, consetetur sadipscing elitr.',
					author: 'Fabian	Vogelsteller',
					timeCreated: moment().subtract(7, 'days')
				}
		];
	}
});
