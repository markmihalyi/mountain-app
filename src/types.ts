import React from "preact";

export type Page = {
  path: string;
  component: React.FunctionComponent;
};

export type BootstrapColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export interface IMountainPageProps {
  id: string;
}
