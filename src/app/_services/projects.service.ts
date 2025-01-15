import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  projects: Project[] = [
   {id: 0, name: "Simple Weather App", pictures: ["../../assets/pic3.png","../../assets/pic2-weather.png","../../assets/pic4.png","../../assets/pic1-weather.png"], projectLink: "//www.github.com/anisberranen123", summary: "JavaScript project that displays weather of the selected city ", description: "C'est une application météo minimaliste qui permet aux utilisateurs de connaître instantanément les conditions météorologiques de n'importe quelle ville dans le monde. Elle présente : Une interface épurée avec un champ de recherche pour entrer le nom de la ville, l'affichage de la température en degrés Celsius Une icône animée qui représente les conditions météo actuelles (soleil, nuages, pluie, etc.) Des informations complémentaires sur : L'humidité (en pourcentage) La vitesse du vent (en km/h) L'application possède aussi un arrière-plan dynamique qui change de couleur et d'animation selon les conditions météorologiques, donnant un retour visuel immédiat sur le temps qu'il fait dans la ville recherchée. Elle utilise l'API OpenWeather pour obtenir des données météorologiques en temps réel et est construite avec HTML, CSS et JavaScript.", tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT]},
    {id: 1, name: "Resume Website ", pictures: ["../../assets/website.png","../../assets/website2.png"], projectLink: "//www.github.com/anisberranen123", summary: "Fullstack web app developed using Angular and Node.JS", description: "C'est un site web de présentation professionnel conçu pour offrir une expérience utilisateur fluide et moderne. L'interface est claire et intuitive, avec une navigation fluide permettant de parcourir aisément les différentes sections du site. Le site comprend plusieurs onglets interactifs, chacun dédié à une section typique d'un CV, comme le portfolio, qui met en avant les projets et réalisations avec des images, des descriptions détaillées et des liens associés, l’éducation, où sont détaillés les diplômes, certifications et formations, ou encore la section contact, qui propose un formulaire interactif permettant d’envoyer des messages directement à l’auteur, avec l’intégration des réseaux sociaux et des coordonnées. La conception met en avant une mise en page responsive et des effets visuels élégants, tels que des animations subtiles et des transitions fluides, qui ajoutent une touche professionnelle et engageante au site. Développé avec Angular et Node.js, le site offre un système de gestion des données permettant de personnaliser et d’actualiser facilement les informations affichées. Hébergé sur AWS, il garantit des performances rapides et une disponibilité constante. Le design, élaboré avec HTML et CSS, met l’accent sur une esthétique moderne et minimaliste.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {
      "id": 2,
      "name": "Chat Application",
      "pictures": ["../../assets/chatapp.png", "../../assets/chatapp2.png"],
      "projectLink": "//www.github.com/anisberranen123",
      "summary": "Real-time chat application developed using React and Firebase",
      "description": "C'est une application de messagerie instantanée conçue pour offrir une communication fluide et rapide. Développée avec React et Firebase, elle propose une interface moderne et épurée permettant aux utilisateurs d'envoyer et de recevoir des messages en temps réel. L'application intègre un système d'authentification sécurisé, permettant de créer un compte ou de se connecter facilement via des fournisseurs comme Google ou Facebook. Les options de messagerie incluent l'échange de textes instantanés, des notifications en temps réel pour les nouveaux messages, ainsi qu'un affichage clair des conversations en cours. Grâce à l'utilisation de Firebase, la synchronisation des messages est instantanée, assurant une expérience utilisateur optimale. Le design responsive garantit une utilisation confortable sur tous les appareils, qu'il s'agisse de smartphones, tablettes ou ordinateurs. Hébergée sur Firebase Hosting, l'application bénéficie d'une infrastructure robuste et fiable, assurant des performances élevées et une disponibilité constante.",
      "tags": [Tag.REACT, Tag.FIREBASE, Tag.JAVASCRIPT]
    }
    
  
  ];
  constructor() { }


  GetProjects(){
    return this.projects;
  }

  GetProjectById(id :number): Project { 
    let project=this.projects.find(project => project.id ===id);
if(project === undefined){
  throw new TypeError('There is not project that matches the id: '+ id);
}

return project;
  }
}
