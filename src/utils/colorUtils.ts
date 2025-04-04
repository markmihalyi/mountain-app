import { BootstrapColor } from "../types.js";

export const getModalColor = (type: string): BootstrapColor => {
  switch (type) {
    case "add":
      return "success";
    case "edit":
      return "success";
    case "delete":
      return "danger";
    default:
      return "secondary";
  }
};

export const getDifficultyColor = (difficulty: string): BootstrapColor => {
  switch (difficulty) {
    case "Easy":
      return "success";
    case "Moderate":
      return "warning";
    case "Hard":
      return "danger";
    default:
      return "light";
  }
};
