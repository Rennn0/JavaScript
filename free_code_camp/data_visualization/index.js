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
const circle_width=500
const circle_height=300

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

const circle=d3.select('body').append('svg').attr('width',circle_width).attr('height',circle_height)

circle.selectAll('circle').data(circle_dataset).enter().append('circle')
.attr('cx',d=>d[0])
.attr('cy',d=>circle_height-d[1])
.attr('r',5)
.style('fill','lightblue')
.style('stroke','black')
.style('stroke-width',2)

circle.selectAll('text')
.data(circle_dataset)
.enter()
.append('text')
.attr('x',d=>d[0]+10)
.attr('y',d=>circle_height-d[1])
.text(d=>(`${d[0]}, ${d[1]}`))

const scale=d3.scaleLinear().domain([-100,100]).range([0,1])
d3.selectAll('div').append('h1').text(scale(11))