import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation-service';

@Component({
  selector: 'app-admin-reservation-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-reservation-edit.html',
  styleUrl: './admin-reservation-edit.css',
})
export class AdminReservationEdit implements OnInit {
 form!: FormGroup;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.form = this.fb.group({
      dateVisite: ['', Validators.required],
      nombreBillets: [1, Validators.required]
    });

    this.reservationService.getById(this.id).subscribe(res => {
      this.form.patchValue(res);
    });
  }

  onSubmit() {
    this.reservationService.updateReservation(this.id, this.form.value)
      .subscribe(() => {
        alert('Réservation modifiée avec succès !');
        this.router.navigate(['/admin/reservations']);
      });
  }
}
