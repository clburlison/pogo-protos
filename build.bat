@echo off
call npm install -g npm
call npm update
call npm audit fix --force
call npm i
rem call npm run-script build
call npm run-script build_js_only
call npm run-script test
