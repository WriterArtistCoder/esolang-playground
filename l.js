function l_lang(p){
    let l = 0, L = 0, o = '';
    for(let c of p){
        switch(c){
            case 'l': l++; break;
            case 'L': L++; break;
            case 'w': l *= L; break;
            case '\n': o += String.fromCharCode(l); l = 0;
        }
    }
    return o;
}