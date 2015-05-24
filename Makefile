babel=node_modules/.bin/babel
webpack=node_modules/.bin/webpack
build_dir=dist
TEST=node_modules/.bin/karma

build:
	rm -rf $(build_dir)
	$(babel) -d ./dist ./src
	NODE_ENV=production $(webpack) src/Style.js $(build_dir)/umd/Style.js
	NODE_ENV=production $(webpack) -p src/Style.js $(build_dir)/umd/Style.min.js
	echo "gzipped, the global build is `gzip -c $(build_dir)/umd/Style.min.js | wc -c | sed -e 's/^[[:space:]]*//'` bytes"

test:
	$(TEST) start
