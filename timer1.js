let timer = process.argv.slice(2);

const beep = function(time) {
  setTimeout(() => {
    process.stdout.write('\007');
  }, time)
}

for (let time of timer) {
  beep(time * 1000);
};