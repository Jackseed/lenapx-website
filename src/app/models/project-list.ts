export interface Projet {
  section: string;
  titre: string;
  lien: string;
  description: string[];
  images: string[];
}

export const PROJETS = [
    { section: 'graphisme',
    titre: 'Le Monde des enfants',
    lien: 'lemondedesenfants',
    description: [
      'Conception d\'un supplément hebdomadaire au journal Le Monde.',
      'Le Monde des Enfants, pour expliquer l\'actualité aux enfants avec des mots simples : C\'est où la  Syrie ?',
// tslint:disable-next-line: max-line-length
      'Et pourquoi on en parle ? Papa, un coeur greffé il peut tomber amoureux ? Et pourquoi il fait si froid à Chigaco alors qu\'on dit que la terre elle se réchauffe ?',
      '',
      'La Cambre, 2014.'],
    images: ['lmde_1.jpg', 'lmde_2.jpg', 'lmde_3.jpg', 'lmde_4.jpg', 'lmde_5.jpg', 'lmde_6.jpg']
    },
    /*
    { section: 'graphisme', titre: 'College 75', lien: 'college75' },
    { section: 'graphisme', titre: 'Chill, Farm & Sun', lien: 'chillfarmandsun' },
    { section: 'graphisme', titre: 'Les Silences de Palomar', lien: 'palomar' },
    { section: 'graphisme', titre: 'Manuel Typographique', lien: 'manueltypo' },
    { section: 'graphisme', titre: 'Couvertures de livres', lien: 'collectionxxi' },
    { section: 'graphisme', titre: 'm²', lien: 'm2' },
    { section: 'graphisme', titre: 'Cartographie', lien: 'cartoactium' },
    { section: 'graphisme', titre: 'L\'établi - logo', lien: 'letabli' },
    { section: 'graphisme', titre: 'ReadMyBook', lien: 'readmybook' },
    { section: 'graphisme', titre: 'La Cabine - logo', lien: 'lacabine' },
    { section: 'illustration', titre: 'Illustrations I', lien: 'illustrations1' },
    { section: 'illustration', titre: 'Illustrations II', lien: 'illustrations2' },
    { section: 'illustration', titre: 'Illustrations III', lien: 'illustrations3' },
    { section: 'illustration', titre: 'Paulette Magazine', lien: 'paulette' },
    { section: 'illustration', titre: 'Paulette Magazine web', lien: 'pauletteweb' },
    { section: 'illustration', titre: 'Feels Like Home', lien: 'feelslikehome' },
    { section: 'illustration', titre: 'Make your monsters', lien: 'serigraphie' },
    { section: 'illustration', titre: 'Pictogrammes', lien: 'pictosbateaux' },
    { section: 'illustration', titre: 'Pourquoi ?', lien: 'pourquoi' },
    { section: 'illustration', titre: 'Carnets', lien: 'carnets' },
    { section: 'animation', titre: 'GIFS', lien: 'gifs' },
    { section: 'animation', titre: 'Les Petites Résolutions Paulette', lien: 'paulettegif' },
    { section: 'animation', titre: 'Matabase', lien: 'matabase' },
    { section: 'animation', titre: 'Saul Bass\'s Walk to Chaumont', lien: 'saulbasswalk' },
    { section: 'animation', titre: 'ReadMyBook - animation', lien: 'readmybookgif' },
  */
  ];