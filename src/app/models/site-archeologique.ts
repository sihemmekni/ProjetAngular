import { Commentaire } from './commentaire';
import { Favori } from './favori';
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
  favoris: Favori[];
}

