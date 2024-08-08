import {Activity} from "./Activity";

export interface ProjectDetails{
  id: string;
  intitule: string;
  description: string;
  statut: string;
  type: string;
  categorie: string;
  etat: string;
  timeConstraint: boolean;
  createdAt: Date;
  demarragePrevue: Date;
  deadline: Date;
  Activities: Activity[];
}
