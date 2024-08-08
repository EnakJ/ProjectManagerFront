export interface Project{
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
}
