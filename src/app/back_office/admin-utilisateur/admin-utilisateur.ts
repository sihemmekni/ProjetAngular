import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-utilisateur',
  imports: [RouterLink],
  templateUrl: './admin-utilisateur.html',
  styleUrl: './admin-utilisateur.css',
})
export class AdminUtilisateur implements OnInit{
  utilisateurs: any[] = [];

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.utilisateurService.getAll().subscribe(users => {
      this.utilisateurs = users;
    });
  }

  deleteUser(id: string) {
    if(confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.utilisateurService.deleteUser(id).subscribe(() => this.loadUsers());
    }
  }
}
