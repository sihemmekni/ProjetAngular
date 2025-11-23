import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Commentaire } from '../../models/commentaire';
import { PatrimoineService } from '../../services/patrimoine';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-commentaire-patrimoine',
  imports: [DatePipe,RouterLink],
  templateUrl: './commentaire-patrimoine.html',
  styleUrl: './commentaire-patrimoine.css',
})
export class CommentairePatrimoine {
  patrimoineId!: number;
  comments: Commentaire[] = [];  

  constructor(
    private route: ActivatedRoute,
    private patrimoineService: PatrimoineService
  ) {}

  ngOnInit() {
    this.patrimoineId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadComments();
  }

  loadComments() {
    this.patrimoineService.getCommentairesBySiteId(this.patrimoineId.toString())
        .subscribe(data => this.comments = data);
  }

  deleteComment(commentId: string) {
    if (confirm('Voulez-vous vraiment supprimer ce commentaire ?')) {
      this.patrimoineService.deleteComment(commentId)
          .subscribe(() => {
            this.comments = this.comments.filter(c => c.id !== commentId);
          });
    }
  }
}
