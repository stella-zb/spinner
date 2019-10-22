// work with Michelle
let timer = 100;
let charac = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (let i = 0; i < charac.length; i++) {
  setTimeout(() => {
    process.stdout.write(charac[i]);
  }, timer)
  timer += 200;
}