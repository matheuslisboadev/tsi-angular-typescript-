import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aulas';
  nome: string = 'Matheus';
  nomeCategoria = '';
  imagem = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png&h=200&w=200';
  minhaFuncao() :void {
    alert('clicou')
  }
  condicao1 = false;
  condicao2 = true;
  nomeDigitado = '';
   categorias: string[] = ['acao','fantasia', 'terror'];

   catFantasia = [
    {name: 'Lord Of The Rings', description: 'Epic fantasy trilogy about the One Ring and the quest to destroy it.', imagem: 'https://a.ltrbxd.com/resized/sm/upload/3t/vq/0u/m6/1tX9ZlgVvWjAQhMs1vAfsYpi7VK-0-460-0-690-crop.jpg?v=30bbb824e1'},
    {name: 'Hobbit', description: 'Adventure of Bilbo Baggins as he joins a group of dwarves to reclaim their homeland.', imagem: 'https://a.ltrbxd.com/resized/sm/upload/s7/p6/sy/6v/mfSAahVkAIYFkx1GVFSlCEdn0mt-0-460-0-690-crop.jpg?v=282e4f2260'},
    {name: 'Star Wars', description: 'Legendary space opera with Jedi, Sith, and the battle between the Rebel Alliance and the Galactic Empire.', imagem: 'https://a.ltrbxd.com/resized/film-poster/2/7/0/6/2706-star-wars-0-230-0-345-crop.jpg?v=f1f1271bf5'},
    {name: 'Harry Potter', description: 'Magical journey of a young wizard, Harry Potter, and his friends at Hogwarts School of Witchcraft and Wizardry.', imagem: 'https://a.ltrbxd.com/resized/film-poster/5/1/3/8/5/51385-harry-potter-and-the-half-blood-prince-0-230-0-345-crop.jpg?v=789e7859c8'},
    {name: 'Narnia', description: 'Chronicles the adventures of children who enter a magical world through a wardrobe.', imagem: 'https://a.ltrbxd.com/resized/sm/upload/6m/cd/1f/3y/pRzEyrMSyvpHf92EhsVSg9Yr81t-0-230-0-345-crop.jpg?v=6a8e01c64d'}
  ];
  
  catAcao = [
    {name: 'Red', description: 'Retired CIA agents team up for a mission after being marked as targets for assassination.', imagem: 'https://a.ltrbxd.com/resized/film-poster/2/5/1/7/5/25175-red-0-230-0-345-crop.jpg?v=e6af617e2a'},
    {name: 'Die Hard', description: 'NYPD officer battles terrorists in a Los Angeles skyscraper during a Christmas party.', imagem: 'https://a.ltrbxd.com/resized/film-poster/5/1/5/5/6/51556-die-hard-0-230-0-345-crop.jpg?v=e24e92754d'},
    {name: 'Fast n Furious', description: 'High-speed heists and intense racing in a series focused on illegal street racing and espionage.', imagem: 'https://a.ltrbxd.com/resized/film-poster/4/6/9/8/6/46986-the-fast-and-the-furious-tokyo-drift-0-125-0-187-crop.jpg?v=d90305bf54'},
    {name: 'Top Gun', description: 'Naval aviators train at the elite Fighter Weapons School, known as TOPGUN.', imagem: 'https://a.ltrbxd.com/resized/sm/upload/e9/dh/nn/5w/fKSZl8ONN7DQh5ujgdObRIFmhiZ-0-70-0-105-crop.jpg?v=042d149015'},
    {name: 'Mission Impossible', description: 'Ethan Hunt and his team undertake high-stakes covert missions against impossible odds.', imagem: 'https://a.ltrbxd.com/resized/film-poster/5/1/2/0/6/51206-mission-impossible-0-70-0-105-crop.jpg?v=7b7690e145'}
  ];
  
  catTerror = [
    {name: 'Halloween', description: 'Masked killer Michael Myers terrorizes a babysitter and returns to his hometown for more mayhem.', imagem: 'https://a.ltrbxd.com/resized/film-poster/6/0/2/9/8/60298-halloween-0-70-0-105-crop.jpg?v=bcb3149dda'},
    {name: 'Hush', description: 'Deaf writer must outsmart a masked killer who invades her secluded home.', imagem: 'https://a.ltrbxd.com/resized/sm/upload/uy/c2/ed/fu/khDYdmPFlaTqeLQVD4ds4xC1mIf-0-70-0-105-crop.jpg?v=ae158bcac1'},
    {name: 'The Spirit', description: 'A rookie cop returns from the dead to fight crime in this stylized and visually striking film.', imagem: 'https://a.ltrbxd.com/resized/sm/upload/lf/3t/ge/bd/jpBmzSmaHCEinSauVZRHHDBq9mx-0-70-0-105-crop.jpg?v=f400a81f2a'},
    {name: 'The Exorcist', description: 'A mother seeks the help of two priests to save her daughter from demonic possession.', imagem: 'https://a.ltrbxd.com/resized/film-poster/4/7/0/4/8/47048-the-exorcist-0-70-0-105-crop.jpg?v=897c9aa211'},
    {name: 'Scream', description: 'A masked killer targets high school students, playing on horror movie tropes.', imagem: 'https://a.ltrbxd.com/resized/film-poster/4/9/4/5/5/49455-scream-0-70-0-105-crop.jpg?v=8bb3c66a30'}
  ];  
}