 let book-name = [
   'harry potter and deathly halows',
   'harry potter and fire glob',
   'Advanced Penetration Testing',
   'Hacking: The Art of Exploitation',
   'Social Engineering',
   'The Complete Hackers Handbook',
   'Reversing: Secrets of Reverse Engineering',
   'Hackers and Pentesters',
   'Ghost in the Wires',
   'The Basics of Hacking and Penetration Testing',
 ];

 function list-generator(Array) {
   for (let i = 0; i < Array.length; i++) {
     let ul = document.createElement('ul');
     ul.id = 'ul-id';
     document.body.appendChild(ul);

     let li = document.createElement('li');
     li.id = 'li-id';
     ul.appendChild(li);
     li.textContent = Array[i];
}
}

list-generator(book-name);ok-name);