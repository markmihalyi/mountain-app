import { BootstrapColor } from "../../types.js";

export interface IHeaderProps {
  page: PageType;
  cardView?: boolean;
  // setCardView?: Dispatch<StateUpdater<boolean>>;
  changeCardView?: () => void;
  showCardViewBtn?: boolean;
  mountainId?: string;
}

export interface IHeaderButton {
  page?: PageType;
  text: string;
  icon: string;
  color: BootstrapColor;
  onClick: () => void;
}

export type PageType = "home" | "new-mountain" | "mountain" | "edit-mountain";
