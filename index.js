const express = require('express');
const redis = require('redis');

// Créer un client Redis
const client = redis.createClient();
client.connect().catch(console.error);

// Connexion à Redis
client.on('connect', function() {
    console.log('Connecté à Redis...');
});
client.on('error', (err) => {
    console.log('Redis Client Error', err);
});

const app = express();
app.use(express.json());

// Route principale pour vérifier le statut du serveur
app.get('/', (req, res) => {
    res.send('Bienvenue dans l\'application Redis CRUD');
});

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});

// les opérations CRUD 
// Ajouter une voiture (SADD)
app.post('/cars', async (req, res) => {
    const car = req.body.car;
    try {
        const reply = await client.sAdd('cars', car);
        res.send(`Voiture ajoutée : ${car}`);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

// Récupérer toutes les voitures (SMEMBERS)
app.get('/cars', async (req, res) => {
    try {
        const cars = await client.sMembers('cars');
        res.json(cars);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

// Supprimer une voiture (SREM)
app.delete('/cars', async (req, res) => {
    const car = req.body.car;
    try {
        const reply = await client.sRem('cars', car);
        res.send(`Voiture supprimée : ${car}`);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

//  gérer les fonctionnalités lists 
// Ajouter une fonctionnalité (LPUSH)
app.post('/features', async (req, res) => {
    const feature = req.body.feature;
    try {
        const reply = await client.lPush('features', feature);
        res.send(`Fonctionnalité ajoutée : ${feature}`);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

// Récupérer toutes les fonctionnalités (LRANGE)
app.get('/features', async (req, res) => {
    try {
        const features = await client.lRange('features', 0, -1);
        res.json(features);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

// Supprimer une fonctionnalité (LREM)
app.delete('/features', async (req, res) => {
    const feature = req.body.feature;
    try {
        const reply = await client.lRem('features', 1, feature);
        res.send(`Fonctionnalité supprimée : ${feature}`);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

//  gérer les descriptions de voitures hashes 
// Ajouter une description de voiture (HSET)
app.post('/cardescriptions', async (req, res) => {
    const id = req.body.id;
    const description = req.body.description;

    try {
        const reply = await client.hSet(`car:${id}`, description);
        res.send(`Description ajoutée pour la voiture ID : ${id}`);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

// Récupérer une description de voiture (HGETALL)
app.get('/cardescriptions/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const description = await client.hGetAll(`car:${id}`);
        res.json(description);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

// Supprimer une description de voiture (DEL)
app.delete('/cardescriptions/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const reply = await client.del(`car:${id}`);
        res.send(`Description supprimée pour la voiture ID : ${id}`);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});
