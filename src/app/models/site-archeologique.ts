import { Commentaire } from './commentaire';
export interface SiteArcheologique {

  id: string;
  nom: string;
  localisation: string;
  description: string;
  dateDecouverte: Date;
  possedeMusee: boolean;
  prixEntree: number;
  imageUrl: string;
  commentaires: Commentaire[];
  
}

