export interface IDataContext {
  mountains: Array<IStoredMountain>;
  getMountain: (id: number) => IStoredMountain;
  addMountain: (m: IMountain) => void;
  editMountain: (id: number, mountain: IMountain) => void;
  deleteMountain: (id: number) => void;
}

export interface IMountain {
  name: string;
  location: string;
  difficulty: DifficultyType;
  elevation: number;
  imageUrl: string;
  description: string;
}

export type DifficultyType = "Easy" | "Moderate" | "Hard";

export interface IStoredMountain extends IMountain {
  id: number;
}
