//// Use the D3 library to read in samples.json from the URL

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function(data) {
    console.log(data);
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual

// Use sample_values as the values for the bar chart.
const values = data.sample_values
// Use otu_ids as the labels for the bar chart.
const labels = data.otu_ids
// Use otu_labels as the hovertext for the chart.
const hovertext = data.otu_labels

// Plotly.newPlot("Bar", data);

const svg = d3.select('bar')
    .append('svg')
    .attr('values', values)
    .attr('labels', labels)
    .attr('hovertext', hovertext);

    //Create a bubble chart that displays each sample.



//Display the sample metadata, i.e., an individual's demographic information.





//Display each key-value pair from the metadata JSON object somewhere on the page.


//Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:




//Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file