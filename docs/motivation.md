# Motivation

Some time ago I had to integrate a network graph. And the every node of the network graph would be tiny pie chart.
The network graph library doesn't support anything else except png or svg as node inner content.
So, it is not very nice idea to keep a bunch of png or svg files for every case of data distribution.
And for obvious reasons it is not possible to use HighCharts, Chart.js or other data visualization library.
(Perhaps it would work with d3, but I'm not sure, it is an overkill to keep such big library for the such small purpose)

Well the `simple-pie` does exactly this thing. It generates tiny svg pie which can be integrated into network graph or
map or any other case, when you can't use data-visualization libraries.

![net and map cases](https://raw.githubusercontent.com/serjilyashenko/simple-pie-project/master/docs/images/map-and-net-case.png)
