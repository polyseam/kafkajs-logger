import type { logCreator as LogCreator, LogEntry } from "kafkajs";
import { logLevel as LogLevel } from "kafkajs";
import * as colors from "@std/fmt/colors";

const colorizeLabel = (label: string) => {
  switch (label) {
    case "ERROR":
      return colors.red(label);
    case "WARN":
      return colors.yellow(label);
    case "INFO":
      return colors.green(label);
    case "DEBUG":
      return colors.blue(label);
    default:
      return label;
  }
};

export const logCreator: LogCreator = (logLevel: LogLevel) => {
  return ({ namespace, level, label, log }: LogEntry) => {
    if (level > logLevel) return;
    const { message, ...extra } = log;
    console.log();
    const ns = namespace ? `[${colors.cyan(`${namespace}`)}]` : "[]";
    console.log(`${colorizeLabel(label)} ${ns} ${message}`);
    console.log();

    if (logLevel === LogLevel.DEBUG) {
      console.log(colors.gray(JSON.stringify(extra)));
      console.log();
      console.log();
    }
  };
};
