# FizzBuzz

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

## Bonus 1

Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.

## Bonus 2

Applica stili differenti agli elementi aggiunti al DOM nel _BONUS 1_, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## Svolgimento

- **PER OGNI** numero a partire da 1 che è minore o uguale a zero
  - **SE** il resto della divisione con i divisori 3 e 5 è uguale a zero
    - scrivi _FizzBuzz_
  - **SE** il resto della divisione con il divisore 3 è uguale a zero
    - scrivi _Fizz_
  - **SE** il resto della divisione con il divisore 5 è uguale a zero
    - scrivi _Buzz_
  - **ALTRIMENTI**
    - scrivi il numero per intero
