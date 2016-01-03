var assetDir = './gulp/assets';
var outputDir = './public/assets';

module.exports = {

    watch: {
        sass: assetDir + '/stylesheets/**/*.scss',
        scripts: assetDir + '/javascripts/**/*.js',
        react: assetDir + '/javascripts/**/*.jsx',
        images: assetDir + '/images/**/*',
    },

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