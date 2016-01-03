var assetDir = './gulp/src';
var outputDir = './lib/assets';

module.exports = {

    // These are the static files that gulp will watch for changes
    watchHtmlFiles: [
        'index.html', 
        '_layouts/*.html', 
        '_includes/*', 
        '_posts/*',
        '_pages/**/*',
    ],

    // Asset files that gulp will watch for changes
    watchAssetFiles: [
        assetDir + '/scss/**/*.scss',
        assetDir + '/scripts/**/*.js',
        assetDir + '/images/**/*'
    ],

    src: {
        sass: assetDir + '/stylesheets',
        sassFile: assetDir + '/stylesheets/main.scss',
        reactSrc: assetDir + '/javascripts/app.jsx',
        scripts: [
            assetDir + '/javascripts/**/*.js', 
        ],
        images: assetDir + '/images/**/*',
    },

    dest: {
        images:  './app/assets/images',
        scripts: outputDir + '/javascripts',
        sass: outputDir + '/stylesheets',
    },
}