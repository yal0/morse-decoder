const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let n=0, str='';
    n=expr.length/10;
     for(let i=0; i<n;i++)
        str= str + getLetter(expr.substr(i*10 ,10));
     return str;
}

function getLetter(code)
{
    if(code=='**********') return ' ';
    let str='';
    for(let i=0; i<10;i+=2)
    { 
        switch(code.substr(i ,2)) 
        {
            case '10':
                str=str + '.';
                break;
            case '11':
                str= str + '-';
                break;
          }
    }
    return MORSE_TABLE[str];
}

module.exports = {
    decode
}
