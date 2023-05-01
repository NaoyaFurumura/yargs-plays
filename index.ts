import yargs from "yargs";

yargs
  .command("play", "play your code LIFE")
  .demandCommand(1, "you at least one life")
  .alias({
    h: "help",
  }).argv;
