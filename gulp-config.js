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
        sass: assetDir + '/stylesheets/**/*.scss',
        reactSrc: assetDir + '/javascripts/components/app.jsx',
        scripts: [
            assetDir + '/javascripts/**/*.js', 
        ],
        images: assetDir + '/images/**/*',
    },

    dest: {
        images:  outputDir + '/images',
        scripts: outputDir + '/javascripts',
        sass: outputDir + '/stylesheets',
    },
}