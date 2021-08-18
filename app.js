//Crear la clase manga

class Manga{
    constructor(titulo, autor, isbn){

        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn

    }
}

class UI{
    static displayMangas()  {
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

        mangas.forEach((manga) => UI.addMangaToList(manga));
    }
         static addMangaToList(manga){

        const lista = document.querySelector('#manga-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${manga.titulo}</td>
        <td>${manga.autor}</td>
        <td>${manga.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
        lista.appendChild(row);
    }


    static deleteManga(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }


    static showAlert(message, className){
        const div = document.createElement('div');
        div.className =  `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#manga-form');
        container.insertBefore(div, form);



        setTimeout(() => document.querySelector('.alert').remove(), 2500);
    }

    static clearFields(){
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#isbn').value = '';
    }
}

class Storage{
    static getMangas(){
        let mangas;
        if (localStorage.getItem('mangas') === null) {
            mangas = [];
        }else{
            mangas =JSON.parse(localStorage.getItem('mangas'));
        }

    }

    static addMangas(manga){
        const mangas = Store.getMangas();

        mangas.push(manga);

        localStorage.setItem('mangas', JSON.stringify(mangas));

    }

    static removeMangas(isbn){
        const mangas

    }

}
document.addEventListener('DOMContentLoaded', UI.displayMangas);

document.querySelector('#manga-form').addEventListener('submit', (e) =>  {


    
    e.preventDefault();
    
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;
    

    //Validate
    if (titulo === '' || autor === '' || isbn === '') {
        UI.showAlert('SOS PELOTUDO NO PODES DEJAR ESPACIOS VACIOS', 'info');
    }else{

        const manga = new Manga(titulo, autor, isbn);
    
        UI.addMangaToList(manga);

        UI.showAlert('Manga agregado', 'success');
    
        UI.clearFields();
    }



    
});


document.querySelector('#manga-list').addEventListener('click', (e) =>{
    UI.deleteManga(e.target);

    UI.showAlert('Manga eliminado', 'danger');


} )



