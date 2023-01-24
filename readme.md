## Demo-kod för att skapa en service (modul) för att kommunicera med MySql

### Förutsättningar

Denna kod förutsätter att du har en MySql server på din dator med en databas som heter _mydb_. Databasen ska ha tabellerna _users_ och _posts_. Om du har en annan struktur eller andra namn får du uppdatera inställningarna för databaskopplingarna och justera de querys som körs mot databasen.

### Installation

För att köra koden behöver du först installera dess dependencies. Det gör du genom att köra

```
npm install
```

i rotmappen. Det kommer installera npm-paketet [mysql2](https://www.npmjs.com/package/mysql2) samt [express](https://www.npmjs.com/package/express).

### Köra koden

Starta servern med

```
node server.js
```

eller, om du har nodemon installerat och inte kör i PowerShell,

```
nodemon server.js
```
