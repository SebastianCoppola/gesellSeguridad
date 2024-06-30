export const routes = {
    EMPRESA: {
        title: 'EMPRESA',
        url: '/empresa',
        section: 'empresa',
        children: null
    },
    SOLUCIONES: {
        title: 'SOLUCIONES',
        url: '/soluciones',
        section: 'soluciones',
        children: {
            AJAX: { title: 'Alarma Ajax', url: '/ajax', section: null },
            RISCO: { title: 'Alarma Risco', url: '/risco', section: null },
            SMART_PANICS: { title: 'Alarma Smart Panics', url: '/smart-panics-flota', section: 'smart-panics' },
            SMART_HOME: { title: 'Smart Home', url: '/smart-home', section: null},
            PERSONAR_DE_SEGURIDAD: {title: 'Personal de Seguridad', url: '/personal-custodias', section: 'personal'},
            MONITOREO_FLOTA: { title: 'Monitoreo de Flota', url: '/smart-panics-flota', section: 'flota' },
            CUSTODIAS: { title: 'Custodias Especiales', url: '/personal-custodias', section: 'custodias' },
        }
    },
    PRODUCTOS: {
        title: 'PRODUCTOS',
        url: '/productos',
        section: 'productos',
        children: null
    },
    PAQUETES: {
        title: 'PAQUETES',
        url: '/paquetes',
        section: 'paquetes',
        children: null
    },
    TIPS: {
        title: 'TIPS',
        url: '/tips',
        section: null,
        children: null
    },
    CONTACTO: {
        title: 'CONTACTO',
        url: '/empresa',
        section: 'contacto',
        children: null
    }
}