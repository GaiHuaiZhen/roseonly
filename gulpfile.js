var gulp=require("gulp")
var sass=require("gulp-sass")

gulp.task("default",function(){
	
	//console.log("aaaaaaaaaaaaaaaaaaa")
	return gulp.src("scss/index.scss").pipe(sass()).pipe(gulp.dest("css"))
//	
	
})


gulp.task("watch",function(){
	gulp.watch(["scss/index.scss"],["default"])
	
})
