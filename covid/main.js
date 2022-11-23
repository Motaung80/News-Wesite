// console.log('connected');

let values = {};

fetch('https://disease.sh/v3/covid-19/countries')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        data.forEach((d) => {
            let temp = {};
            temp.total = d.cases;
            temp.deaths = d.deaths;
            temp.recovered = d.recovered;
            temp.active = d.active;
            values[d.countryInfo.iso2] = temp;
        });
        // console.log(values);


        new svgMap
        ({
            targetElementID: 'svgMap',
            data:
            {
                data:
                {
                    active:
                    {
                        name: 'Active Cases',
                        format: '{0}',
                        thousandSeparator: ',',
                    },

                    total:
                    {
                        name: 'Total Cases',
                        format: '{0}',
                        thousandSeparator: ',',
                        //   thresholdMax: 50000,
                        //   thresholdMin: 1000
                    },

                    recovered:
                    {
                        name: 'Recovered Cases',
                        format: '{0}',
                        thousandSeparator: ',',
                    },

                    deaths:
                    {
                        name: 'Total Deaths',
                        format: '{0}',
                        thousandSeparator: ',',
                    }


                },



                applyData: 'total',
                values: values
            }


        });
    });