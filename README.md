# Résumé de la création d'une application Redis avec Node.js

## Étapes de développement

1. **Installation des dépendances** :
   - Installation de Node.js et du module Redis via npm.
   - Configuration de l'environnement de développement.

2. **Création du serveur Express** :
   - Mise en place d'un serveur HTTP avec Express pour gérer les requêtes.
   - Connexion à l'instance Redis à l'aide du client Redis.

3. **Définition des routes** :
   - Création de routes pour effectuer des opérations CRUD sur les voitures, les fonctionnalités et les descriptions de voitures :
     - `POST /cars` : Ajouter une voiture.
     - `GET /cars` : Récupérer toutes les voitures.
     - `DELETE /cars` : Supprimer une voiture.
     - `POST /features` : Ajouter une fonctionnalité.
     - `GET /features` : Récupérer toutes les fonctionnalités.
     - `DELETE /features` : Supprimer une fonctionnalité.
     - `POST /cardescriptions` : Ajouter une description de voiture.
     - `GET /cardescriptions/:id` : Récupérer une description de voiture par ID.
     - `DELETE /cardescriptions/:id` : Supprimer une description de voiture par ID.

4. **Tests des fonctionnalités** :
   - Utilisation de Postman pour tester les différentes routes de l'application.
#### 1. Ajouter une voiture (POST /cars)

**Postman :**
- Méthode : `POST`
- URL : `http://localhost:3000/cars`
- Corps de la requête (JSON) :
    ```json
    {
        "car": "ford-mustang"
    }
    ```
#### 2. Récupérer toutes les voitures (GET /cars)
**Postman :**
- Méthode : `GET`
- URL : `http://localhost:3000/cars`
#### 3. Supprimer une voiture (DELETE /cars)

**Postman :**
- Méthode : `DELETE`
- URL : `http://localhost:3000/cars`
- Corps de la requête (JSON) :
    ```json
    {
        "car": "ford-mustang"
    }```
    
#### 4. Ajouter une fonctionnalité à  une voiture (POST /features)

**Postman :**
- Méthode : `POST`
- URL : `http://localhost:3000/features`
- Corps de la requête (JSON) :
    ```json
{
    "feature": "climate-control"
}```

#### 5. Récupérer toutes les focntionnalités (GET /features)
**Postman :**
- Méthode : `GET`
- URL : `http://localhost:3000/features`

#### 6. Supprimer une focntionnalité (DELETE /features)

**Postman :**
- Méthode : `DELETE`
- URL : `http://localhost:3000/features`
- Corps de la requête (JSON) :
    ```json
    {
        "feature": "climate-control"
    }```
#### 7. Ajouter une description à  une voiture (POST /cardescriptions)

**Postman :**
- Méthode : `POST`
- URL : `http://localhost:3000/cardescriptions`
- Corps de la requête (JSON) :
    ```json
{
    "id": "cjhvatfuc00005mfj2zycewid",
    "description": {
        "make": "Ford",
        "model": "Mustang",
        "year": "2020"
    }
}```

#### 8. Récupérer la description d'une voiture (GET /cardescriptions)
**Postman :**
- Méthode : `GET`
- URL : `http://localhost:3000/cardescriptions/cjhvatfuc00005mfj2zycewid`

#### 9. Supprimer la description d'une voiture (DELETE /cardescriptions)

**Postman :**
- Méthode : `DELETE`
- URL : `http://localhost:3000/cardescriptions/cjhvatfuc00005mfj2zycewid`
- Corps de la requête (JSON) :
    ```json
    {
        "feature": "climate-control"
    }```
    
    
5. **Débogage et corrections** :
   - Résolution des erreurs liées à la connexion au client Redis.
   - Adaptation des méthodes Redis pour correspondre à la version 4 de Redis, en utilisant des promesses et des méthodes modernes.

## Difficultés rencontrées

- **Problèmes de connexion au client Redis** : Initialement, le client Redis ne se connectait pas correctement, entraînant des erreurs lors des opérations CRUD.
  
- **Méthodes obsolètes** : Certaines méthodes utilisées dans le code étaient incompatibles avec la version 4 de Redis. Cela nécessitait des modifications pour utiliser les méthodes appropriées, comme `client.hSet` au lieu de `client.hmset`.

- **Gestion des erreurs** : La gestion des erreurs n'était pas correctement configurée, ce qui causait des plantages de l'application. J'ai dû ajouter des vérifications d'erreurs pour m'assurer que l'application reste stable.

- **Format des requêtes HTTP** : Lors des tests avec `curl` et Postman, il y avait des problèmes de formatage des requêtes qui ont nécessité des ajustements.

## Conclusion

Ce projet m'a permis d'acquérir une compréhension approfondie de la manière dont Redis fonctionne avec Node.js et de développer une application CRUD simple mais fonctionnelle. J'ai surmonté divers défis techniques, ce qui a enrichi mes compétences en développement web et en gestion des bases de données.
