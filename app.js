// firts one. If it doesnt work let try another way

// // Create a GSAP timeline with default settings and infinite looping
// const containertimeline = gsap.timeline({
//   defaults: { duration: 1, ease: "power2.Out" },
//   repeat: 1,
// });

// // Move and transform the red box along the top edge
// containertimeline.to(
//   ".red",
//   {
//     x: "100vw", // Move to the top-right corner
//     borderRadius: "50%", // Transform to a circle
//     backgroundColor: "green", // Change color to green
//     xPercent: -100,
//   },
//   "<"
// );

// containertimeline.to(
//   ".green",
//   {
//     y: "100vh", // Move to the top-right corner
//     borderRadius: "50%", // Transform to a circle
//     backgroundColor: "blue", // Change color blue
//     yPercent: -100,
//   },
//   "<"
// );

// containertimeline.to(
//   ".blue",
//   {
//     x: "-100vw", // Move to the top-right corner
//     borderRadius: "50%", // Transform to a circle
//     backgroundColor: "yellow", // Change color yellow
//     xPercent: 100, for this i want to make the circle now move x 100% of the width. new property learnt
//   },
//   "<"
// );

// containertimeline.to(
//   ".yellow",
//   {
//     y: "-100vh", // Move to the top-right corner
//     borderRadius: "50%", // Transform to a circle
//     backgroundColor: "red", // Change color red
// yPercent: 100,  for this i want to make the circle now move y 100% of the width. new property learnt
//   },
//   "<"
// );

const containertimeline = gsap.timeline({
  defaults: { duration: 1, ease: "power2.Out" },
  repeat: -1,
});

containertimeline
  .from(".red", {
    top: "-200px",
    left: "-200",
    duration: 1,
  })
  .from(".green", {
    top: "-200",
    right: "-200",
    duration: 1,
  })
  .from(".blue", {
    bottom: "-200",
    right: "-200",
    duration: 1,
  })
  .from(".yellow", {
    bottom: "-200",
    left: "-200",
    duration: 1,
  })
  .to(".red", {
    x: -200,
    left: "100vw",
    borderRadius: "50%",
    backgroundColor: "green",
    duration: 1,
  })
  .to(
    ".green",
    {
      y: -200,
      top: "100vh",
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 1,
    },
    "<"
  )
  .to(
    ".blue",
    {
      y: "-200",
      x: 200,
      right: "100vw",
      top: "100vh",
      borderRadius: "50%",
      backgroundColor: "yellow",
      duration: 1,
    },
    "<"
  )
  .to(
    ".yellow",
    {
      right: "100vw",
      top: "0",
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 1,
    },
    "<"
  )

  .to(".yellow", { x: "-200", duration: 1 })
  .to(".red", { x: 0, duration: 1 }, "<")
  .to(".green", { right: "-200", duration: 1 }, "<")
  .to(".blue", { x: 0, duration: 1 }, "<");
