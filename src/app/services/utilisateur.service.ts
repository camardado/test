import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private url:string = 'http://localhost:8000/api/';

  private http = inject(HttpClient);

  enregistrerCandidat(candidatDonnees:any){
    return this.http.post<string>(this.url+'candidat/enregistrer', candidatDonnees);
  }

  enregistrerRecruteur(recruteurDonnees:any){
    return this.http.post<string>(this.url+'recruteur/enregistrer', recruteurDonnees);
  }

  recuperer() {
    return this.http.get<any>(this.url+'utilisateur');
  }

  enregistrerProfile(profileDonnees:any) {
    return this.http.post<any>(this.url+'utilisateur/profile/enregistrer', profileDonnees);
  }

  connexion(utilisateurDonnees:any) {
    return this.http.post<any>(this.url+'connexion', utilisateurDonnees);
  }

  creerJeton(jeton:any) {
    localStorage.setItem('jeton', jeton);
  }

  recuperJeton() {
    return localStorage.getItem('jeton') ?? '';
  }

  estConnecte() {
    return !!this.recuperJeton();
  }

  deconnexion() {
    localStorage.removeItem('jeton');
  }
}
