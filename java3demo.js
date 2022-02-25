// function greet() {
//     console.log('Hello World');
// }

// const greet = () => console.log('Hello World');

// greet();

const message = 'hi';
console.log(message);

function start() {
    const message = 'hi';
    console.log(message);

    if (true) {
        const another = 'bye';
    }
}

function stop() {
    const message = 'bye';
}

console.log(message);
// will error


start()

const video = {
    title: 'a', 
    play() {
        console.log(this);
    }
}

video.play();
