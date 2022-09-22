type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu:MenuOptions) =>{
    let returnObject = {
     all:false,
     dog:false,
     cat:false,
     fish:false   
    };

    if(activeMenu !==''){
        returnObject[activeMenu] = true;
    }

    return returnObject;

}

export const getMsgFromPet = (activeMenu:MenuOptions) : string =>{
    let msg:string = '';
    
    if(activeMenu == "all"){
        msg = 'Todos São Bem Vindos'
    }

    else if(activeMenu == "dog"){
        msg = 'Todos os Cachorros Bem Vindos'
    }

    else if(activeMenu == "cat"){
        msg = 'Todos os Gatos Bem Vindos'
    }

    else if(activeMenu == "fish"){
        msg = 'Todos os Peixes Bem Vindos'
    }

    else {
        msg = 'Todos São Bem Vindos'
    }

    return msg;
}

