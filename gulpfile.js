var gulp = require('gulp');

var jsPath = './dist/**/*.js';

/**
 * -----------------------
 * Commande par DÉFAUT
 * ---
 * - Affichage du message "Hello world"
 * -----------------------
 */

gulp.task('default', function () {
    console.log('Hello world');
});

/**
 * -----------------------
 * Commandes de GÉNÉRATION
 * ---
 * - $ gulp js => concatenation JS -> app.js
 * -----------------------
 */

// https://www.npmjs.com/package/gulp-concat
var concat = require('gulp-concat');

gulp.task('js', function () {
    return gulp.src(jsPath)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./'))
});

/**
 * -----------------------
 * Commande d'AUTOMATISATION
 * ---
 * - $ gulp watch => activation des commandes de GÉNÉRATION
 * -----------------------
 */

gulp.task('watch', function () {
    gulp.watch(jsPath, gulp.series('js'))
        .on('change', function (event) {
            console.log('JS updated');
        });
});