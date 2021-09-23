import React from "react";
import Particles from "react-particles-js";

function ParticleBg() {
  return (
    <div style={{ height:"100vh", overflow:"hidden", width: "100vw" }} className="m-0 p-0 fixed top-0">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 640,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#fff",
              },
              polygon: {
                nb_sides: 2,
              },
              image: {
                src: "",
                width: 100,
                height: 80,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 0.2,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 21.57842157842158,
                size_min: 3.996003996003996,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 190,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 631.3480069132609,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default ParticleBg;
