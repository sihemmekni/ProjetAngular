export interface Utilisateur {
    
  id: string;
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER"; 
}

