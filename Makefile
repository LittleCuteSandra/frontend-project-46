install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
gendiff:
	node bin/index.js
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8