var assetDir = './gulp/src';
var outputDir = './lib/assets';

module.exports = {

    // Asset files that gulp will watch for changes
    watchAssetFiles: [
        assetDir + '/stylesheets/**/*.scss',
        assetDir + '/javascripts/**/*.js',
        assetDir + '/javascripts/**/*.jsx',
        assetDir + '/images/**/*',
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
        scripts: outputDir + '/javascripts/gulp',
        sass: outputDir + '/stylesheets/gulp',
    },
}