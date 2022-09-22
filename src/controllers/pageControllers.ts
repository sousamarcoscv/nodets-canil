import {Request,Response} from 'express';
import{createMenuObject,getMsgFromPet} from '../helpers/createMenuObject';
import{Pet} from '../models/pet';


export const home = (req:Request, res:Response)=>{
    let list = Pet.getAll();
    res.render('pages/page',{
        menu: createMenuObject('all'), 
        banner: {
        title:'Todos os animais',
        background:'allanimals.jpg'
        },
        list,
        body:getMsgFromPet("all")

    });
};

export const dogs = (req:Request, res:Response)=>{
    let list = Pet.getFromType('dog');
    res.render('pages/page',{
        menu: createMenuObject('dog'),        
        banner: {
            title:'Cachorros',
            background:'banner_dog.jpg'
        },
        list,
        body:getMsgFromPet("dog")
    });
};

export const cats = (req:Request, res:Response)=>{
    let list = Pet.getFromType('cat');
    res.render('pages/page',{
        menu:createMenuObject('cat'),            
        banner: {
            title:'Gatos',
            background:'banner_cat.jpg'
        },
        list,
        body:getMsgFromPet("cat")
    });
};

export const fishes = (req:Request, res:Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/page',{
        menu:createMenuObject('fish'),        
        banner: {
            title:'Peixes',
            background:'banner_fish.jpg'
        },
        list,
        body:getMsgFromPet("fish")
    });
};