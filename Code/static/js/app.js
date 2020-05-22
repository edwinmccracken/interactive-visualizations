function init(){

    var selector = d3.select("selDataset");
    d3.json("data/samples.json").then((data) => 
    {
        var sample_values = data.names
        sample_values.foreach((sample) => {selector.append("option")
        .text(sample).property("value", sample)
    });
})}

init();

function buildMetadata(sample){
    d3.json("samples.json").then((data)=>{
        var metadata=data.metadata;
        var result_array = metadata.filter(sample_object => sample_object.id == sample)
        var result = result_array[0]
        var PANEL= d3.select("#sample-metadata");
        PANEL.html("");
        Object.defineProperties(result).forEach(([key,value]) =>{
            PNANEL.append("h6").text(`${key}: ${value}`);
        });
    });
}

function buildchart(sample){
    d3.json("data/samples.json").then((data) =>
    {
        var samples = data.samples
        var result_array = samples.filter(sample_object => sample_object.id == sample)
        var result = result_array[0]
        var otu_ids = result.otu_ids
        var otu_labels = result.otu_label
        var sample_value = result.sample_values
    

        var y_ticks = otu_ids.slice(0,10).map(otu_ids => `OTU ${otu_ids}`).reverser();
        var bar_data = [{
            y: y_ticks,
            x: sample_values.slice(0,10).reverser(),
            type:"bar",
            orientation: "h"
        }];
        plotly.newplot('bar', bar_data);
   })}

// create another init function that will select the tag (class or id) where I want to put the bar chart and call the function build_charts
function init(){

    var selection = d3.select("id");
    d3.json("data/samples.json").then((data) => 
    {
        var sample_values = data.names
        sample_values.foreach((sample) => {selector.append("option")
        .text(sample).property("value", sample)
    });
})}

// create a function called option_changed, that will change the meta data so that the bar chart displays another type of population.
function option_changed(){
d3.json("samples.json").then((data)=>{
    var metadata=data.metadata;
    var result_array = metadata.filter(sample_object => sample_object.id == sample)
    var result = result_array[0]
    var PANEL= d3.select("#sample-metadata");
    PANEL.html("");
    Object.defineProperties(result).forEach(([key,value]) =>{
        PNANEL.append("h6").text(`${key}: ${value}`);
    });
});
}