{
	"packageno": "461471-001",
	"manifestation": [
    "SD Base",
    "PBS Base"
  ],
	"dist": "PBS",
	"title": "American Masters Althea",
	"nola": "CIVW 000101",
	"estimated": "2015-11-04T18:30:00.000Z",
	"actual": "2016-11-04T18:30:00.000Z",
	"usage": {
		"start": "11/5/2015",
		"end": "11/8/2015"
	},
	"status": [
    "On Edge",
    "Available"
  ]
}, {
	"packageno": "461471-002",
	"manifestation": "PBS Base",
	"dist": "ABT",
	"title": "American Masters Althea",
	"nola": "CIVW 000101",
	"estimated": "2015-11-04T18:30:00.000Z",
	"actual": "2016-11-04T18:30:00.000Z",
	"usage": {
		"start": "11/5/2015",
		"end": "11/8/2015"
	},
	"status": [
    "On Edge",
    "Available"
  ]
}









[
  {
    'repeat(5, 10)': {
      _id: '{{objectId()}}',
      index: '{{index()}}',
      guid: '{{guid()}}',
      isActive: '{{bool()}}',
      balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      picture: 'http://placehold.it/32x32',
      age: '{{integer(20, 40)}}',
      eyeColor: '{{random("blue", "brown", "green")}}',
      name: {
        first: '{{firstName()}}',
        last: '{{surname()}}'
      },
      company: '{{company().toUpperCase()}}',
      email: function (tags) {
        // Email tag is deprecated, because now you can produce an email as simple as this:
        return (this.name.first + '.' + this.name.last + '@' + this.company + tags.domainZone()).toLowerCase();
      },
      phone: '+1 {{phone()}}',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      about: '{{lorem(1, "paragraphs")}}',
      registered: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
      latitude: '{{floating(-90.000001, 90)}}',
      longitude: '{{floating(-180.000001, 180)}}',
      tags: [
        {
          'repeat(5)': '{{lorem(1, "words")}}'
        }
      ],
      range: range(10),
      friends: [
        {
          'repeat(3)': {
            id: '{{index()}}',
            name: '{{firstName()}} {{surname()}}'
          }
        }
      ],
      greeting: function (tags) {
        return 'Hello, ' + this.name.first + '! You have ' + tags.integer(5, 10) + ' unread messages.';
      },
      favoriteFruit: function (tags) {
        var fruits = ['apple', 'banana', 'strawberry'];
        return fruits[tags.integer(0, fruits.length - 1)];
      }
    }
  }
]
