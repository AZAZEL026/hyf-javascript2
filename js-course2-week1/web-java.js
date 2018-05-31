let books = {
    book1: { title: 'Hacking For Dummies ', language: 'Language : English', author: 'Kevin Beaver', img: 'https://images-na.ssl-images-amazon.com/images/I/51zWxdgpeGL._SX396_BO1,204,203,200_.jpg' },
    book2: { title: 'The Basics of Hacking and Penetration Testing', language: 'Language : English', author: 'Patrick Engebretson auf', img: 'https://images-na.ssl-images-amazon.com/images/I/51yJFpFXUIL._SX404_BO1,204,203,200_.jpg' },
    book3: { title: 'Ghost in the Wires', language: 'Language : English', author: 'Kevin-D.-Mitnick', img: 'https://images-na.ssl-images-amazon.com/images/I/51kt5CfVEkL._SX330_BO1,204,203,200_.jpg' },
    book4: { title: 'Advanced Penetration Testing', language: 'Language : English', author: 'Wil Allsopp', img: 'https://images-na.ssl-images-amazon.com/images/I/51rHiMZEVWL._SX396_BO1,204,203,200_.jpg' },
    book5: { title: 'Social Engineering: The Art of Human Hacking', language: 'Language : English', author: 'Kevin Hogan', img: 'https://images-na.ssl-images-amazon.com/images/I/41y3owh9LJL._SX332_BO1,204,203,200_.jpg' },
    book6: { title: 'Hacking: The Art of Exploitation', language: 'Language : English', author: 'Jon Erickson', img: 'https://images-na.ssl-images-amazon.com/images/I/61VBaAS4IbL._SX383_BO1,204,203,200_.jpg' },
    book7: { title: 'Black Hat Python: Python Programming for Hackers and Pentesters', language: 'Language : English', author: 'Justin Seitz ', img: 'https://images-na.ssl-images-amazon.com/images/I/51zkykS8WJL._SX376_BO1,204,203,200_.jpg' },
    book8: { title: 'The Complete Hackers Handbook ', language: 'Language : English', author: 'Dr. K. Page', img: 'https://images-na.ssl-images-amazon.com/images/I/51KVC839P3L._SX293_BO1,204,203,200_.jpg' },
    book9: { title: 'Hacking Exposed 7: Network Security Secrets and Solutions', language: 'Language : English', author: 'Stuart McClure', img: 'https://images-na.ssl-images-amazon.com/images/I/512u0nVk6GL._SX403_BO1,204,203,200_.jpg' },
    book10: { title: 'Reversing: Secrets of Reverse Engineering', language: 'Language : English', author: 'Elliot-J.-Chikofsky', img: 'https://images-na.ssl-images-amazon.com/images/I/51LqPykmtzL._SX396_BO1,204,203,200_.jpg' }
}

let PHO = function listgenerator(Obj) {
    for (let i = 0; i < Object.entries(Obj).length; i++) {
        let ul = document.createElement('ul');
        document.body.appendChild(ul);

        let li = document.createElement('li');
        ul.appendChild(li);

        let h2 = document.createElement('h2');
        li.appendChild(h2);
        h2.textContent = Object.entries(Obj)[i][1].title;

        let h4 = document.createElement('h4');
        li.appendChild(h4);
        h4.textContent = Object.entries(Obj)[i][1].language;

        let h3 = document.createElement('h3');
        li.appendChild(h3);
        h3.textContent = Object.entries(Obj)[i][1].author;

        let img = document.createElement('img');
        li.appendChild(img);
        img.setAttribute('src', Object.entries(Obj)[i][1].img);

        //*** Css Beutify */

        document.body.style.display = 'flex';
        document.body.style.flexFlow = 'row wrap';
        document.body.style.justifyContent = 'space-around';
        document.body.style.fontFamily = 'arial';

        ul.style.listStyle = 'none';
        ul.style.padding = '0';
        ul.style.margin = '1vw';
        ul.style.width = '360px';
        ul.style.maxHeight = '450px';
        ul.style.overflow = 'hidden';
        ul.style.border = '3px groove grey';

        li.style.display = 'flex';
        li.style.flexDirection = 'column';

        h2.style.margin = '0';
        h2.style.padding = '0.4vw';
        h2.style.fontSize = '1.3vw';

        h3.style.margin = '0';
        h3.style.padding = '0.5vw';
        h3.style.fontSize = '1vw';

        h4.style.margin = '0';
        h4.style.padding = '0.5vw';
        h4.style.fontSize = '0.7vw';

        img.style.objectFit = 'cover';
    }
}

PHO(books);