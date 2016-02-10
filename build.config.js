/**
 * Configuration du projet.
 */
var pkg = require('./package.json');

module.exports = {
    dist: 'dist',
    /**
     * Header de la distribution.
     */
    banner:
    '/*!\n' +
    ' * Copyright 2015 itesoft.\n' +
    ' * http://itesoft.com/\n' +
    ' *\n' +
    ' * <%= pkg.name %>, v<%= pkg.version %>\n' +
    ' * A powerful music manager.*/\n' ,

    closureStart: '(function() {var RELEASE_VERSION="1.0.0";\n',
    closureEnd: '\n})();',
    distFolder: 'dist',
    srcFolder: 'main',

    /**
     * Liste des fichiers JS de l'application qui seront minifier pour la prod.
     */
    appFiles: [
        '!main/app/**/*Test.js',// Exclude test files
        'main/app/app.module.js',
        'main/app/**/*.js'
    ],

    /**
     * Liste des librairies minifié à utiliser en prod
     */
    vendorJavascriptFiles: [
        'main/assets/lib/angular/angular.js',
        'main/assets/lib/angular-resource/angular-resource.js'
    ],
    /**
     *
     * Fichiers de locales pour les formats, les monnaies, les jours, mois et autres.
     * A ne PAS minifier pour l'utilisation d'Angular Dynamic Locale
     *
     */
    localeJsFiles: [
    ],
    vendorCssFiles: [
        'main/assets/lib/bootstrap/dist/css/bootstrap.min.css'
    ]
};