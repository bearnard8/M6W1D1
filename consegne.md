# Consegne

## W1D1

- Creare e visualizzare gli autori del blog;
- Strutturare i documenti mongo;  - FATTO
- Creare le rotte corrette;  - FATTO

Schema

``` js
_id // generato da Mongo
nome // stringa
cognome // stringa
email // stringa
data di nascita // stringa
avatar // stringa
```

Rotte

- GET/authors => ritorna la lista degli autori;  - FATTO
- GET/authors/123 => ritorna il singolo autore; - FATTO
- POST/authors => crea un nuovo autore; - FATTO

EXTRA

- Crea le rotte PUT e DELETE;  - FATTO
- Connetti il backend al frontend;
  - installa il pacchetto cors;
  - importa con import statement;
  - usa cors con questo comando `server.use(cors())`;

Rotte

- PUT/authors/123 => modifica l'autore con l'id associato;  - FATTO
- DELETE/authors/123 => cancella l'autore con l'id associato;  - FATTO
