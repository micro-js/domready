#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/hihat test/*

validate: node_modules
	@standard

.PHONY: test validate release
