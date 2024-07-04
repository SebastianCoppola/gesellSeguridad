//Assets:
import img_house from '../../assets/card/house.png'
import img_fourHouses from '../../assets/card/housex4.png'
import img_eightHouses from '../../assets/card/housex8.png'
import img_person from '../../assets/card/user.png'
import img_family from '../../assets/card/family.png'
import img_familyXl from '../../assets/card/familyXL.png'
import img_store from '../../assets/card/store.png'
import img_threeStore from '../../assets/card/storex3.png'
import img_map from '../../assets/card/map.png'
//Utils:
import { colors } from '../../utils/const'
import { whatsApp } from '../../utils/utils'

export const dataPaquetes = {
    HELLGRUN_INDIVIDUAL: {
        img: img_house, 
        title:'Hellgrün Individual', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 1, text: 'hogar protegido'},
            {number: 1, text: 'hub'},
            {number: 2, text: 'sensores de movimiento'},
            {number: 1, text: 'detector de apertura'},
            {number: '∞', text: 'usuarios Ajax app ilimitados'},
        ]
    },
    HELLGRUN_VECINAL: {
        img: img_fourHouses, 
        title:'Hellgrün Vecinal', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 3, text: 'hogares protegidos'},
            {number: 1, text: 'hub'},
            {number: 2, text: 'sensores de movimiento por propiedad'},
            {number: 1, text: 'detector de apertura por propiedad'},
            {number: 2, text: 'usuario Ajax app por propiedad'},
        ]
    },
    HELLGRUN_VECINAL_XL: {
        img: img_eightHouses, 
        title:'Hellgrün Vecinal XL', 
        price:'Valor promocianal', 
        buttonLabel:'CONSULTAR', 
        buttonAction:()=>whatsApp(),
        secondButtonLabel:'PROMOCIÓN ESPECIAL', 
        items: [
            {number: 8, text: 'propiedades protegidas'},
            {number: 1, text: 'hub'},
            {number: null, text: 'Repartí el costo de la alarma con tus vecinos', color: colors.orange},
        ]
    },
    AJAX_INDIVIDUAL: {
        img: img_house, 
        title:'Ajax Individual', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 1, text: 'hogar protegido'},
            {number: 1, text: 'hub'},
            {number: 2, text: 'sensores de movimiento'},
            {number: 1, text: 'detector de apertura'},
            {number: '∞', text: 'usuarios Ajax app ilimitados'},
        ]
    },
    AJAX_VECINAL: {
        img: img_fourHouses, 
        title:'Ajax Vecinal', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 3, text: 'hogares protegidos'},
            {number: 1, text: 'hub'},
            {number: 2, text: 'sensores de movimiento por propiedad'},
            {number: 1, text: 'detector de apertura por propiedad'},
            {number: 2, text: 'usuario Ajax app por propiedad'},
        ]
    },
    AJAX_VECINAL_XL: {
        img: img_eightHouses, 
        title:'Ajax Vecinal XL', 
        price:'Valor promocianal', 
        buttonLabel:'CONSULTAR', 
        buttonAction:()=>whatsApp(),
        secondButtonLabel:'PROMOCIÓN ESPECIAL', 
        items: [
            {number: 8, text: 'propiedades protegidas'},
            {number: 1, text: 'hub'},
            {number: null, text: 'Repartí el costo de la alarma con tus vecinos', color: colors.orange},
        ]
    },
    RISCO_INDIVIDUAL: {
        img: img_house, 
        title:'Risco Individual', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 1, text: 'hogar protegido'},
            {number: 1, text: 'hub'},
            {number: 2, text: 'sensores de movimiento'},
            {number: 1, text: 'detector de apertura'},
            {number: '∞', text: 'usuario Ajax app ilimitados'},
        ]
    },
    RISCO_VECINAL: {
        img: img_fourHouses, 
        title:'Risco Vecinal', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 3, text: 'hogares protegidos'},
            {number: 1, text: 'hub'},
            {number: 2, text: 'sensores de movimiento por propiedad'},
            {number: 1, text: 'detector de apertura por propiedad'},
            {number: 2, text: 'usuario Ajax app por propiedad'},
        ]
    },
    RISCO_VECINAL_XL: {
        img: img_eightHouses, 
        title:'Risco Vecinal XL', 
        price: null, 
        buttonLabel:'CONSULTAR', 
        buttonAction:()=>whatsApp(),
        secondButtonLabel:'PROMOCIÓN ESPECIAL', 
        items: [
            {number: 8, text: 'propiedades protegidas'},
            {number: 1, text: 'hub'},
            {number: null, text: 'Repartí el costo de la alarma con tus vecinos', color: colors.orange},
        ]
    },
    SMART_PANIC_INDIVIDUAL: {
        img: img_person, 
        title:'Smart Panics Individual', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 1, text: 'usuario Smart Panic app'},
            {number: 1, text: 'usuario protegido'},
        ]
    },
    SMART_PANIC_FAMILY: {
        img: img_family, 
        title:'Smart Panics Familiar', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 4, text: 'usuarios Smart Panic app'},
            {number: 4, text: 'usuarios protegidos'},
            {number: 4, text: 'usuarios conectados'},
        ]
    },
    SMART_PANIC_FAMILY_XL: {
        img: img_familyXl, 
        title:'Smart Panics Familiar XL', 
        price:'$x/mes', 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        items: [
            {number: 8, text: 'usuarios Smart Panic app'},
            {number: 8, text: 'usuarios protegidos'},
            {number: 8, text: 'usuarios conectados'},
        ]
    },
    SEGURIDAD_COMPARTIDA: {
        img: img_threeStore, 
        title:'Seguridad Compartida', 
        price: null, 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        secondButtonLabel:'Descubrí Smart Panics', 
        items: [
            {number: 1, text: 'agente de seguridad'},
            {number: 2, text: 'cuadras protegidas'},
            {number: null, text: 'Recorridos Preventivos'},
            {number: 1, text: 'usuario App Smart Panics por propiedad'},
        ]
    },
    SEGURIDAD_INDIVIDUAL: {
        img: img_store, 
        title:'Seguridad Individual', 
        price: null, 
        buttonLabel:'MÁS INFORMACIÓN', 
        buttonAction:()=>whatsApp(),
        secondButtonLabel:'Descubrí Smart Panics', 
        items: [
            {number: 1, text: 'agente de seguridad'},
            {number: 1, text: 'casa o comercio protegidos'},
            {number: 1, text: 'usuario App Smart Panics'},
        ]
    },
    SEGURIDAD_BARRIO: {
        img: img_map, 
        title:'Seguridad Barrio', 
        price: null, 
        buttonLabel:'CONSULTAR', 
        buttonAction:()=>whatsApp(),
        secondButtonLabel:'PROMOCIÓN ESPECIAL', 
        items: [
            {number: null, text: 'Recorridos preventivos cada tiempo determinado'},
            {number: null, text: 'Compartí la seguridad con tus vecinos', color: colors.orange},
        ]
    },
}