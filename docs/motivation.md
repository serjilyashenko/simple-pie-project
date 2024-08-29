# Motivation

The idea for the `simple-pie` packages came from a need to add small pie charts to a network graph. The network graph
library only supported `PNG` or `SVG` files for node content, making it impractical to store many pre-rendered images for
different data sets.

Using popular charting libraries like `Highcharts` or `Chart.js` wasn't an option because they were too complex for this
specific use case. Even though `D3.js` might have worked, it was still too large for such a simple need.

That's where `simple-pie` comes in. It provides a straightforward solution for creating the smallest possible SVG pie and
doughnut charts. These charts are perfect for embedding in network graphs, maps, or any application where you need
a simple and efficient way to visualize data without the bulk of heavier libraries.

![net and map cases](https://raw.githubusercontent.com/serjilyashenko/simple-pie-project/master/docs/images/map-and-net-case.png)
