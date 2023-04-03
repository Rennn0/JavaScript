const dataset=[12, 31, 22, 17, 25, 18, 29, 14, 9]
const circle_dataset = [
   [ 34,    78 ],
   [ 109,   280 ],
   [ 310,   120 ],
   [ 79,    411 ],
   [ 420,   220 ],
   [ 233,   145 ],
   [ 333,   96 ],
   [ 222,   333 ],
   [ 78,    320 ],
   [ 21,    123 ]
 ];
const width=400
const height=200

const svg=d3.select('body').append('svg').attr('width',width).attr('height',height)
svg.selectAll('rect').data(dataset).enter().append('rect').attr("x", (data,index)=>(index*30))
   .attr("y", d=>(height-3*d))
   .attr("width", 25)
   .attr("height", d=>(d*3))
   .attr('fill','navy')
   .attr('class','bar')
   .append('title')
   .text(d=>d)
svg.selectAll('text').data(dataset).enter().append('text')
   .attr('x',(d,i)=>(i*30))
   .attr('y',d=>(height-3*d-3))
   .text(d=>d)
   .style('font-size', '25px')
   .style('fill','red')

const circle_width=500
const circle_height=300
const padding=30  
const circle=d3.select('body').append('svg').attr('width',circle_width).attr('height',circle_height)
const xScale=d3.scaleLinear().domain([0,d3.max(circle_dataset,d=>d[0])]).range([padding,circle_width-padding])
const yScale=d3.scaleLinear().domain([0,d3.max(circle_dataset,d=>d[1])]).range([circle_height-padding,padding])

circle.selectAll('circle').data(circle_dataset).enter().append('circle')
.attr('cx',d=>xScale(d[0]))
.attr('cy',d=>yScale(d[1]))
.attr('r',5)
circle.selectAll('text').data(circle_dataset).enter().append('text')
.attr('x',d=>xScale(d[0]+10))
.attr('y',d=>yScale(d[1]))
.text(d=>d[0]+';'+d[1])

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);
circle.append("g")
   .attr("transform", "translate(0,270)")
   .call(xAxis);
circle.append("g")
   .attr("transform", "translate(30,0)")
   .call(yAxis);
