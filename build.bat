@echo off
call npm install -g npm
call npm update
call npm audit fix --force
call npm i
call npm run-script build
rem call npm run-script build_js_only
call npm run-script test
