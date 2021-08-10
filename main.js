//Crear la clase manga

class Manga{
    constructor(titulo, autor, isbn){

        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn

    }
}

class UI{
    static displayMangas(){
        const StoredManga = [
            {
                titulo: 'Manga 1',
                autor: 'Kiyomasa',
                isbn: 'EC001'
            },
            {
                titulo: 'Manga 2',
                autor: 'Nishimura',
                isbn: 'EC002'
            }


        ];

        const mangas = StoredManga;

        mangas.forEach((manga) => console.log(manga));
    }

    static addMangaToList(manga){

        const lista = document.querySelector('#manga-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${manga.titulo}</td>
        <td>${manga.autor}</td>
        <td>${manga.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `

        lista.appendChild(row);
    }
}


document.addEventListener('DOMContentLoaded', UI.displayMangas);


document.querySelector('#manga-form').addEventListener('submit', (e) 
=> {

    e.preventDefault();

    const title = document.querySelector('#tltle').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;

    const manga = new Manga(title, autor, isbn);

    console.log(manga);



});