
export default {
    
    fullScreen: {
        enable: false,
      },
    // style:{
    //     position:'absolute'
    //     // height: 600
    // },
    background: {
        color: {
            value: "#1d1d1d",
        },

    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,

        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },

        },

    },
    particles: {
        color: {
            value: "#FFB6C1",
        },
        links: {
            color: "#FFB6C1",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },

       
    },
    
    detectRetina: true,

}