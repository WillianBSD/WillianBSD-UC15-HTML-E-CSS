//1. Pegar a hora atual
const agora = new Date();
const hora = agora.getHours();
const minutos = agora.getMinutes();
const minutosFormatados = String(minutos). padStart (2,'0');
const horaTexto = (hora) , {minutosFormataos};;

//2. Selecionar elementos do HTML
const pagina = document.getElementById('pagina');
const emojiEl = document.getElementById('emoji');
const saudacaoEl = document.getElementById('saudacao');
const horarioEl = document.getElementById('horario');

//3. Variavéis que guardam o resultado
let turno = '';
let emojiStr = '';
let msg = '';

//4. Decidir o turno com if/else
    if (hora >= 5 && hora < 12) {
        turno = 'manha';
        emojiStr = '';
        msg = 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
        turno = 'tarde';
        emojiStr = '';
        msg = 'Boa tarde';
    } else {
        turno = 'madrugada';
        emojiStr = '';
        msg = 'vai dormir, fi da peste';
    }

    // 5. Aplicar o tema da página
   pagina.classList.add(turno);

   //6. Colocar o conteudo nos elementos
   emojiEl.textContent = emojiStr;
   saudacaoEl.textContent = msg;
   horarioEl.textContent = `São {horaTexto}h`;

   //7. Log para o desenvolvedor
   console.log(Turno , {turno} | Hora , (horaTexto))