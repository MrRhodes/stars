import React from "react";
import * as d3 from "d3";
import * as d3geo from "d3-geo";
import { feature } from "topojson-client";

export default () => {
  const d3Container = React.useRef(null);
  const [land, setLand] = React.useState();

  React.useEffect(() => {
    console.log("mounted");

    const fetchJson = async () => {
      const world = await d3.json(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"
      );

      const land = feature(world, world.objects.land);

      setLand(land);
    };

    fetchJson();
  }, []);

  React.useEffect(() => {
    if (!land) return;

    const width = 500,
      height = 500;

    const context = d3
      .select(d3Container.current)
      .attr("width", width)
      .attr("height", height)
      .node()
      .getContext("2d");

    const projection = d3geo
      .geoOrthographic()
      // .scale(250)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const path = d3geo
      .geoPath()
      .projection(projection)
      .context(context);

    console.log({ land });

    let x = 0;

    setInterval(() => {
      projection.rotate([x / 10, 0, 0]);
      context.clearRect(0, 0, width, height);
      context.beginPath();
      path(land);
      context.fill();
      x += 5;
    }, 100);
  }, [land]);

  return <canvas className="d3-component" ref={d3Container} />;
};
