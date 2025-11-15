import { Favori } from './favori';

export interface Utilisateur {
    
  id: string;
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER"; 
  favoris: Favori[];
}

