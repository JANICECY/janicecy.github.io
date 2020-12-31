import './App.css';
import Particles from "react-tsparticles";
import jsIcon from './assets/images/js_icon.png'
import flaskIcon from './assets/images/flask_icon.png'
function App() {
  const projects = [
    {
      name: 'react-express-chat-room',
      desc: 'A real-time chat room application built with Socket.IO',
      link: 'https://github.com/JANICECY/react-express-chat-room',
      icons: [jsIcon]
    },
    {
      name: 'react-twitter-trend-app',
      desc: 'A React and Flask application, get latest Twitter trends via Twitter APIs',
      link: 'https://github.com/JANICECY/react-twitter-trend-app',
      icons: [jsIcon, flaskIcon]
    }
  ]


  const renderProject = ({ name, desc, link, icons }) => {
    return (
      <a className='project-wrapper' href={link} target='_blank'>
        <p className='project-header'>
          <span className='project-name'>{name}</span>
          {icons.map(i => <img src={i} className='project-icon' />)}
        </p>
        <p className='project-desc'>{desc}</p>
      </a>
    )
  }

  return (
    <>
      <ParticleBG />
      <div id='profile'>
        <h1>Hello,</h1>
        <h2 >My name is  <span style={{ color: 'rgba(241, 196, 15,1.0)'}}>Ying Chen</span> </h2>
        <p>I am a full-stack developer and I have 1-year work experience in React.js and Node.js</p>
        <p>Outside of programming, I enjoy video games and coffee.</p>
      </div>
      <div id='projects'>
        <h3>Project <span style={{ color: 'rgba(241, 196, 15,1.0)'}}>Highlights</span></h3>
        {projects.map(item => renderProject(item))}
      </div>
    </>
  );
}


function ParticleBG() {
  return (
    <Particles
      id="tsparticles"
      options={{
        "autoPlay": true,
        "background": {
          "color": {
            "value": "#2c3e50"
          },
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "backgroundMode": {
          "enable": true,
          "zIndex": -1
        },
        "detectRetina": true,
        "fpsLimit": 60,
        "infection": {
          "cure": false,
          "delay": 0,
          "enable": false,
          "infections": 0,
          "stages": []
        },
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "repulse",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 400,
              "duration": 2,
              "opacity": 0.8,
              "size": 40
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            },
            "push": {
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "speed": 1
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "quantity": 1
            }
          }
        },
        "manualParticles": [],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": false
          }
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": false,
            "mode": "bounce"
          },
          "color": {
            "value": "#ff0000",
            "animation": {
              "enable": true,
              "speed": 20,
              "sync": true
            }
          },
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 100,
            "enable": true,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#00ff00"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "move": {
            "angle": {
              "offset": 45,
              "value": 90
            },
            "attract": {
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "direction": "none",
            "distance": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "maxSpeed": 50
            },
            "noise": {
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": false,
            "size": false,
            "speed": 6,
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 80
          },
          "opacity": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 0.5,
            "animation": {
              "enable": false,
              "minimumValue": 0.1,
              "speed": 3,
              "sync": false
            }
          },
          "reduceDuplicates": false,
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {
              "polygon": {
                "nb_sides": 5
              },
              "star": {
                "nb_sides": 5
              },
            },
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": 3,
            "animation": {
              "destroy": "none",
              "enable": false,
              "minimumValue": 0.1,
              "speed": 20,
              "startValue": "max",
              "sync": false
            }
          },
          "stroke": {
            "width": 0
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": false,
        "themes": []
      }}
    />
  )

}

export default App;
