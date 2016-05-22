const gulp = require('gulp');
const rsync = require('gulp-rsync');

// Deploying all files
// from dest folder to server

gulp.task('deploy', () => {
	return gulp.src('dest/**')
		.pipe(rsync({
			root: 'dest',
            username: 'travis',
			hostname: 'web-standards.ru',
			destination: '/var/www/wsd.events/www/htdocs/',
			recursive: true,
			clean: true,
			incremental: true
		}));
});
