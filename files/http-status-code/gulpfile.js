const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const del = require('del');


// Где находятся исходные файлы препроцессоров.
const cssInputDir = 'assets/scss/*.scss';
//Где будут расположены готовые файлы.
const OutputDir = 'public';
// Имя для файла в который будут объединены все стили.  
const cssOutputFName = 'main.css';


gulp.task('sass', () => {
    return gulp
        .src(cssInputDir)
        .pipe(sass())
        .pipe(concat(cssOutputFName))
        .pipe(gulp.dest(OutputDir + '/css'));
});

// Задача для удаления директории
gulp.task('clean', () => del(OutputDir));


// // Задача для копирования файлов в другую директорию.
gulp.task('assets', () => {
    return gulp
        .src('assets/html/**')
        .pipe(gulp.dest(OutputDir + '/html'));
});

gulp.task('watch', () => {
    // Следить за изменениями и при каждом изменении исполнять задачи [taskName1, taskName2, taskNameN]
    gulp.watch(cssInputDir, gulp.parallel('sass'));
});








gulp.task('build', gulp.series('clean', gulp.parallel('assets', 'sass')));